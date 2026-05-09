#!/usr/bin/env python3
"""
Script para configurar automáticamente los secretos de GitHub Actions
Requiere un token personal de GitHub con permisos de repositorio
"""

import os
import sys
import json
import subprocess
from pathlib import Path

# Colores para output
GREEN = '\033[92m'
RED = '\033[91m'
YELLOW = '\033[93m'
BLUE = '\033[94m'
RESET = '\033[0m'
BOLD = '\033[1m'

class GitHubSecretsConfigurator:
    def __init__(self):
        self.repo_owner = "nauzael"
        self.repo_name = "Portafolio_sucre"
        self.repo_full_name = f"{self.repo_owner}/{self.repo_name}"
        self.github_token = None
        
    def print_header(self, text):
        print(f"\n{BOLD}{BLUE}{'='*60}{RESET}")
        print(f"{BOLD}{BLUE}{text}{RESET}")
        print(f"{BOLD}{BLUE}{'='*60}{RESET}\n")
    
    def print_success(self, text):
        print(f"{GREEN}✓ {text}{RESET}")
    
    def print_error(self, text):
        print(f"{RED}✗ {text}{RESET}")
    
    def print_warning(self, text):
        print(f"{YELLOW}⚠ {text}{RESET}")
    
    def print_info(self, text):
        print(f"{BLUE}ℹ {text}{RESET}")
    
    def get_github_token(self):
        """Obtener token de GitHub"""
        self.print_header("🔑 PASO 1: Configurar Token de GitHub")
        
        print(f"""
Para configurar los secretos necesitas un token personal de GitHub.

{BOLD}Cómo obtener tu token:{RESET}
1. Ve a: https://github.com/settings/tokens
2. Haz clic en "Generate new token (classic)"
3. Nombre: "GitHub Actions Secrets"
4. Selecciona estos permisos:
   - [x] repo (acceso completo al repositorio)
   - [x] workflow (modificar archivos de workflow)
5. Haz clic en "Generate token"
6. {BOLD}COPIA EL TOKEN INMEDIATAMENTE{RESET} (no podrás verlo de nuevo)
        """)
        
        token = input(f"\n{BOLD}Pega tu token de GitHub:{RESET} ").strip()
        
        if not token:
            self.print_error("Token no proporcionado")
            return False
        
        if len(token) < 20:
            self.print_error("El token parece ser inválido (muy corto)")
            return False
        
        self.github_token = token
        self.print_success(f"Token configurado (primeros 10 caracteres: {token[:10]}...)")
        return True
    
    def get_vercel_credentials(self):
        """Obtener credenciales de Vercel"""
        self.print_header("🚀 PASO 2: Obtener Credenciales de Vercel")
        
        print(f"""
Necesitas 3 valores de Vercel. Sigue estos pasos:

{BOLD}Para VERCEL_TOKEN:{RESET}
1. Ve a: https://vercel.com/account/tokens
2. Haz clic en "Create"
3. Nombre: "GitHub Actions"
4. Copia el token completo

{BOLD}Para VERCEL_ORG_ID y VERCEL_PROJECT_ID:{RESET}
1. Ve a tu proyecto en Vercel
2. Settings → General
3. Busca "Project ID" y cópialo
4. Busca "Team ID" (es tu ORG ID) en la misma página
        """)
        
        credentials = {}
        
        # VERCEL_TOKEN
        token = input(f"\n{BOLD}Pega tu VERCEL_TOKEN:{RESET} ").strip()
        if not token:
            self.print_error("Token de Vercel no proporcionado")
            return None
        credentials['VERCEL_TOKEN'] = token
        
        # VERCEL_ORG_ID
        org_id = input(f"{BOLD}Pega tu VERCEL_ORG_ID (Team ID):{RESET} ").strip()
        if not org_id:
            self.print_error("VERCEL_ORG_ID no proporcionado")
            return None
        credentials['VERCEL_ORG_ID'] = org_id
        
        # VERCEL_PROJECT_ID
        project_id = input(f"{BOLD}Pega tu VERCEL_PROJECT_ID:{RESET} ").strip()
        if not project_id:
            self.print_error("VERCEL_PROJECT_ID no proporcionado")
            return None
        credentials['VERCEL_PROJECT_ID'] = project_id
        
        self.print_success("Credenciales de Vercel obtenidas")
        return credentials
    
    def set_secret(self, secret_name, secret_value):
        """Configurar un secreto en GitHub"""
        try:
            cmd = [
                'gh', 'secret', 'set', secret_name,
                '--repo', self.repo_full_name,
                '--body', secret_value
            ]
            
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                env={**os.environ, 'GH_TOKEN': self.github_token}
            )
            
            if result.returncode == 0:
                self.print_success(f"Secreto '{secret_name}' configurado")
                return True
            else:
                self.print_error(f"Error al configurar '{secret_name}': {result.stderr}")
                return False
        except Exception as e:
            self.print_error(f"Excepción al configurar '{secret_name}': {str(e)}")
            return False
    
    def check_gh_cli(self):
        """Verificar si GitHub CLI está instalado"""
        try:
            subprocess.run(['gh', '--version'], capture_output=True, check=True)
            return True
        except:
            return False
    
    def install_gh_cli_instructions(self):
        """Mostrar instrucciones para instalar GitHub CLI"""
        self.print_header("⚠ GitHub CLI No Instalado")
        
        print(f"""
{RED}GitHub CLI (gh) no está instalado.{RESET}

{BOLD}Instálalo desde:{RESET} https://cli.github.com

{BOLD}En Windows (con Chocolatey):{RESET}
choco install gh

{BOLD}En Windows (con winget):{RESET}
winget install --id GitHub.cli

{BOLD}En macOS:{RESET}
brew install gh

{BOLD}En Linux:{RESET}
sudo apt install gh
        """)
    
    def configure_via_api(self, secret_name, secret_value):
        """Configurar secreto usando la API REST de GitHub"""
        import base64
        import requests
        
        try:
            headers = {
                'Authorization': f'token {self.github_token}',
                'Accept': 'application/vnd.github.v3+json'
            }
            
            # Obtener la clave pública del repositorio
            pub_key_url = f'https://api.github.com/repos/{self.repo_full_name}/actions/secrets/public-key'
            pub_key_resp = requests.get(pub_key_url, headers=headers)
            
            if pub_key_resp.status_code != 200:
                self.print_error(f"Error obteniendo clave pública: {pub_key_resp.text}")
                return False
            
            pub_key_data = pub_key_resp.json()
            public_key = pub_key_data['key']
            key_id = pub_key_data['key_id']
            
            # Encriptar el secreto
            from cryptography.hazmat.primitives.asymmetric import rsa
            from cryptography.hazmat.primitives import serialization
            from nacl import pwhash, secret, utils
            import nacl.public
            
            # Usar la clave pública para encriptar
            public_key_obj = nacl.public.PublicKey(public_key, encoder=nacl.encoding.Base64Encoder)
            encrypted = nacl.public.SealedBox(public_key_obj).encrypt(secret_value.encode())
            
            # Construir el payload
            payload = {
                'encrypted_value': base64.b64encode(encrypted).decode(),
                'key_id': key_id
            }
            
            # Configurar el secreto
            secret_url = f'https://api.github.com/repos/{self.repo_full_name}/actions/secrets/{secret_name}'
            secret_resp = requests.put(secret_url, json=payload, headers=headers)
            
            if secret_resp.status_code in [201, 204]:
                self.print_success(f"Secreto '{secret_name}' configurado vía API")
                return True
            else:
                self.print_error(f"Error configurando secreto: {secret_resp.text}")
                return False
        except Exception as e:
            self.print_error(f"Error con API: {str(e)}")
            return False
    
    def run(self):
        """Ejecutar la configuración completa"""
        self.print_header("⚙ Configurador de Secretos GitHub Actions")
        
        self.print_info("Este script configurará automáticamente los secretos para Vercel")
        self.print_info(f"Repositorio: {self.repo_full_name}")
        
        # Paso 1: Obtener token
        if not self.get_github_token():
            return False
        
        # Verificar si GitHub CLI está instalado
        if not self.check_gh_cli():
            self.print_warning("GitHub CLI no está instalado. Usaremos la API REST directamente.")
            # Intentaremos con API
            use_api = True
        else:
            use_api = False
        
        # Paso 2: Obtener credenciales de Vercel
        vercel_creds = self.get_vercel_credentials()
        if not vercel_creds:
            return False
        
        # Paso 3: Configurar secretos
        self.print_header("🔐 PASO 3: Configurar Secretos")
        
        secrets = {
            'VERCEL_TOKEN': vercel_creds['VERCEL_TOKEN'],
            'VERCEL_ORG_ID': vercel_creds['VERCEL_ORG_ID'],
            'VERCEL_PROJECT_ID': vercel_creds['VERCEL_PROJECT_ID'],
            'NEXT_PUBLIC_SITE_URL': 'https://descubresucre.com'
        }
        
        success_count = 0
        
        for secret_name, secret_value in secrets.items():
            self.print_info(f"Configurando {secret_name}...")
            
            if use_api:
                if self.configure_via_api(secret_name, secret_value):
                    success_count += 1
            else:
                if self.set_secret(secret_name, secret_value):
                    success_count += 1
        
        # Resultado final
        self.print_header("📊 Resultado Final")
        
        print(f"Secretos configurados: {success_count}/{len(secrets)}\n")
        
        if success_count == len(secrets):
            self.print_success("¡Todos los secretos han sido configurados correctamente!")
            print(f"""
{BOLD}Próximos pasos:{RESET}
1. Ve a GitHub: https://github.com/{self.repo_full_name}
2. Haz un push a la rama main: git push origin main
3. Los workflows se ejecutarán automáticamente
4. Verifica el estado en: Actions

{BOLD}Comand de prueba:{RESET}
git -C "e:\\CRCSI" commit --allow-empty -m "test: trigger GitHub Actions" && git -C "e:\\CRCSI" push origin main
            """)
            return True
        else:
            self.print_error(f"Solo {success_count}/{len(secrets)} secretos fueron configurados")
            return False


if __name__ == '__main__':
    configurator = GitHubSecretsConfigurator()
    success = configurator.run()
    sys.exit(0 if success else 1)
