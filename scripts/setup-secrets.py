#!/usr/bin/env python3
"""
Configurador de Secretos de GitHub Actions - Versión Simple
Usa la API REST de GitHub con un token personal
"""

import requests
import base64
import sys
import os
from typing import Optional

class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    END = '\033[0m'
    BOLD = '\033[1m'

def print_header(text):
    print(f"\n{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.END}")
    print(f"{Colors.BOLD}{Colors.BLUE}{text}{Colors.END}")
    print(f"{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.END}\n")

def print_success(text):
    print(f"{Colors.GREEN}✓ {text}{Colors.END}")

def print_error(text):
    print(f"{Colors.RED}✗ {text}{Colors.END}")

def print_warning(text):
    print(f"{Colors.YELLOW}⚠ {text}{Colors.END}")

def print_info(text):
    print(f"{Colors.CYAN}ℹ {text}{Colors.END}")

class GitHubSecretsAPI:
    def __init__(self, token: str, owner: str, repo: str):
        self.token = token
        self.owner = owner
        self.repo = repo
        self.base_url = f"https://api.github.com/repos/{owner}/{repo}"
        self.headers = {
            "Authorization": f"token {token}",
            "Accept": "application/vnd.github.v3+json",
            "Content-Type": "application/json"
        }
    
    def verify_token(self) -> bool:
        """Verifica que el token sea válido"""
        try:
            resp = requests.get(
                "https://api.github.com/user",
                headers=self.headers,
                timeout=5
            )
            if resp.status_code == 200:
                user = resp.json()
                print_success(f"Token válido para usuario: {user['login']}")
                return True
            else:
                print_error(f"Token inválido (Status: {resp.status_code})")
                return False
        except Exception as e:
            print_error(f"Error verificando token: {e}")
            return False
    
    def verify_repo(self) -> bool:
        """Verifica que el repositorio sea accesible"""
        try:
            resp = requests.get(
                self.base_url,
                headers=self.headers,
                timeout=5
            )
            if resp.status_code == 200:
                repo_data = resp.json()
                print_success(f"Repositorio accesible: {repo_data['full_name']}")
                return True
            else:
                print_error(f"Repositorio no accesible (Status: {resp.status_code})")
                return False
        except Exception as e:
            print_error(f"Error verificando repositorio: {e}")
            return False
    
    def get_public_key(self) -> Optional[dict]:
        """Obtiene la clave pública del repositorio para encriptar secretos"""
        try:
            url = f"{self.base_url}/actions/secrets/public-key"
            resp = requests.get(url, headers=self.headers, timeout=5)
            
            if resp.status_code == 200:
                return resp.json()
            else:
                print_error(f"Error obteniendo clave pública: {resp.status_code}")
                print_error(f"Respuesta: {resp.text}")
                return None
        except Exception as e:
            print_error(f"Excepción obteniendo clave pública: {e}")
            return None
    
    def set_secret(self, secret_name: str, secret_value: str) -> bool:
        """Configura un secreto en el repositorio"""
        try:
            # Obtener clave pública
            key_data = self.get_public_key()
            if not key_data:
                return False
            
            # Encriptar el valor
            from nacl import public, encoding
            
            public_key = public.PublicKey(
                key_data['key'],
                encoder=encoding.Base64Encoder
            )
            sealed_box = public.SealedBox(public_key)
            encrypted = sealed_box.encrypt(secret_value.encode())
            encrypted_value = base64.b64encode(encrypted).decode()
            
            # Preparar payload
            payload = {
                'encrypted_value': encrypted_value,
                'key_id': key_data['key_id']
            }
            
            # Configurar secreto
            url = f"{self.base_url}/actions/secrets/{secret_name}"
            resp = requests.put(
                url,
                json=payload,
                headers=self.headers,
                timeout=5
            )
            
            if resp.status_code in [201, 204]:
                print_success(f"Secreto '{secret_name}' configurado")
                return True
            else:
                print_error(f"Error configurando '{secret_name}': {resp.status_code}")
                print_error(f"Respuesta: {resp.text}")
                return False
                
        except ImportError:
            print_error("Librería 'pynacl' no instalada")
            print_info("Instálala con: pip install pynacl")
            return False
        except Exception as e:
            print_error(f"Excepción configurando secreto: {e}")
            return False

def main():
    print_header("🔐 CONFIGURADOR DE SECRETOS GITHUB ACTIONS")
    
    # Solicitar token
    print_info("Necesitas un token personal de GitHub")
    print(f"""
{Colors.BOLD}¿Cómo obtener el token?{Colors.END}
1. Ve a: https://github.com/settings/tokens
2. Haz clic en "Generate new token (classic)"
3. Nombre: "GitHub Actions Secrets"
4. Selecciona los permisos:
   ✓ repo (acceso completo al repositorio)
   ✓ workflow (modificar archivos de workflow)
5. Haz clic en "Generate token"
6. {Colors.BOLD}COPIA EL TOKEN INMEDIATAMENTE{Colors.END}
    """)
    
    token = input(f"{Colors.BOLD}Pega tu token personal de GitHub:{Colors.END} ").strip()
    
    if not token:
        print_error("Token no proporcionado")
        sys.exit(1)
    
    # Crear API client
    api = GitHubSecretsAPI("nauzael", "Portafolio_sucre", token)
    
    # Verificar token y repositorio
    print_header("✓ VERIFICANDO CREDENCIALES")
    
    if not api.verify_token():
        sys.exit(1)
    
    if not api.verify_repo():
        sys.exit(1)
    
    # Obtener credenciales de Vercel
    print_header("🚀 CREDENCIALES DE VERCEL")
    
    print(f"""
{Colors.BOLD}¿Cómo obtener las credenciales?{Colors.END}

{Colors.BOLD}VERCEL_TOKEN:{Colors.END}
1. Ve a: https://vercel.com/account/tokens
2. Haz clic en "Create"
3. Copia el token

{Colors.BOLD}VERCEL_ORG_ID y VERCEL_PROJECT_ID:{Colors.END}
1. Ve a tu proyecto en Vercel
2. Settings → General
3. Busca ambos IDs y cópialos
    """)
    
    vercel_token = input(f"{Colors.BOLD}VERCEL_TOKEN:{Colors.END} ").strip()
    vercel_org_id = input(f"{Colors.BOLD}VERCEL_ORG_ID:{Colors.END} ").strip()
    vercel_project_id = input(f"{Colors.BOLD}VERCEL_PROJECT_ID:{Colors.END} ").strip()
    
    if not (vercel_token and vercel_org_id and vercel_project_id):
        print_error("Credenciales incompletas")
        sys.exit(1)
    
    # Configurar secretos
    print_header("🔑 CONFIGURANDO SECRETOS")
    
    secrets = {
        "VERCEL_TOKEN": vercel_token,
        "VERCEL_ORG_ID": vercel_org_id,
        "VERCEL_PROJECT_ID": vercel_project_id,
        "NEXT_PUBLIC_SITE_URL": "https://descubresucre.com"
    }
    
    success_count = 0
    
    for secret_name, secret_value in secrets.items():
        print_info(f"Configurando {secret_name}...")
        if api.set_secret(secret_name, secret_value):
            success_count += 1
    
    # Resultado
    print_header("📊 RESULTADO")
    
    if success_count == len(secrets):
        print_success(f"¡Todos los {len(secrets)} secretos fueron configurados!")
        print(f"""
{Colors.BOLD}✨ ¿QUÉ SIGUE?{Colors.END}

1. Haz un push para activar los workflows:
   git -C "e:\\CRCSI" commit --allow-empty -m "test: trigger workflows" && git -C "e:\\CRCSI" push origin main

2. Ve a GitHub Actions:
   https://github.com/nauzael/Portafolio_sucre/actions

3. Verifica que los workflows se ejecuten correctamente

¡Listo! 🎉 Tus secretos están configurados y los workflows están listos.
        """)
        return 0
    else:
        print_error(f"Solo {success_count}/{len(secrets)} secretos fueron configurados")
        return 1

if __name__ == "__main__":
    sys.exit(main())
