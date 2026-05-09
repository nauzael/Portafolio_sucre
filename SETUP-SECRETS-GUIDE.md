# 🔐 Configuración de Secretos GitHub Actions - Guía Rápida

## ⚡ Lo que necesitas (3 pasos simples)

### PASO 1: Token Personal de GitHub

**Enlace directo:** https://github.com/settings/tokens

1. Click en "Generate new token (classic)"
2. Dale un nombre: `GitHub Actions Secrets`
3. Selecciona estos permisos:
   - ✅ `repo` (acceso completo)
   - ✅ `workflow` (modificar workflows)
4. Click en "Generate token"
5. **COPIA EL TOKEN** (no podrás verlo de nuevo)

**Guardar como:** `GITHUB_TOKEN`

---

### PASO 2: Vercel Token

**Enlace directo:** https://vercel.com/account/tokens

1. Click en "Create"
2. Nombre: `GitHub Actions`
3. Copia el token completo

**Guardar como:** `VERCEL_TOKEN`

---

### PASO 3: Vercel IDs

**Enlace:** Tu proyecto en Vercel → Settings → General

Busca y copia estos dos valores:
- **Project ID** → Guardar como `VERCEL_PROJECT_ID`
- **Team ID** (en la misma página) → Guardar como `VERCEL_ORG_ID`

---

## 🚀 Una vez tengas los 4 valores:

### Opción A: Interfaz Web (Más fácil)

1. Ve a: https://github.com/nauzael/Portafolio_sucre/settings/secrets/actions
2. Click en "New repository secret"
3. Añade 4 secretos:

| Name | Value |
|------|-------|
| `VERCEL_TOKEN` | Tu token de Vercel |
| `VERCEL_ORG_ID` | Tu Team ID de Vercel |
| `VERCEL_PROJECT_ID` | Tu Project ID de Vercel |
| `NEXT_PUBLIC_SITE_URL` | https://descubresucre.com |

---

### Opción B: Script Python (Automatizado)

Ejecuta este comando en la terminal:

```bash
cd e:\CRCSI
e:/CRCSI/.venv/Scripts/python.exe scripts/setup-secrets.py
```

El script te pedirá:
1. Token personal de GitHub
2. VERCEL_TOKEN
3. VERCEL_ORG_ID
4. VERCEL_PROJECT_ID

Y configurará todo automáticamente.

---

## ✅ Verifica que funciona

Una vez configurados los secretos:

```bash
cd e:\CRCSI
git commit --allow-empty -m "test: trigger workflows"
git push origin main
```

Luego ve a: **https://github.com/nauzael/Portafolio_sucre/actions**

Deberías ver el workflow `CI/CD Pipeline` ejecutándose.

---

## 🎯 Resumen Visual

```
GitHub Secrets
├── VERCEL_TOKEN ........................ De vercel.com/account/tokens
├── VERCEL_ORG_ID ....................... Team ID del proyecto en Vercel
├── VERCEL_PROJECT_ID ................... Project ID del proyecto en Vercel
└── NEXT_PUBLIC_SITE_URL ................ https://descubresucre.com

↓

GitHub Actions se ejecuta cuando haces push

↓

Build → Test → Deploy a Vercel automáticamente ✨
```

---

**¿Necesitas ayuda?** 
- Tokens no funcionan → Verifica que copies TODO
- Script no corre → Asegúrate de estar en `e:\CRCSI`
- No ves workflows → Haz refresh en la página de Actions
