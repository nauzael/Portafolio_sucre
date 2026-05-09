# 🔑 Configuración de GitHub Actions

Este proyecto utiliza **GitHub Actions** para automatizar builds, tests y deployments.

## 📋 Workflows Disponibles

### 1. **CI/CD Pipeline** (`ci-cd.yml`)
Ejecuta automáticamente en cada push a `main` o `master`:
- ✅ Instala dependencias
- ✅ Ejecuta linting
- ✅ Realiza build del proyecto
- ✅ Deploy automático a Vercel (solo en `main`)

### 2. **Security Scan** (`security.yml`)
Verifica vulnerabilidades de seguridad:
- ✅ Auditoría de dependencias npm
- ✅ Se ejecuta semanalmente (cada domingo)
- ✅ También en cada push

### 3. **Manual Deploy** (`manual-deploy.yml`)
Permite deploy manual desde el panel de GitHub:
- ✅ Selecciona entorno (production o preview)
- ✅ Ejecutado bajo demanda

### 4. **Dependency Check** (`dependency-check.yml`)
Verifica paquetes desactualizados:
- ✅ Se ejecuta semanalmente (cada lunes)
- ✅ Notifica sobre versiones nuevas

---

## ⚙️ Configuración de Secretos en GitHub

### Paso 1: Obtener tokens de Vercel

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Settings → Tokens
3. Crea un nuevo token (alcance: Full Access)
4. Copia el token

### Paso 2: Obtener IDs de Vercel

En tu proyecto de Vercel:
1. Settings → General
2. Busca:
   - **Project ID** 
   - **Team ID** (si es un equipo)

### Paso 3: Configurar secretos en GitHub

1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions
3. Haz clic en "New repository secret"
4. Añade los siguientes secretos:

| Nombre | Valor | Descripción |
|--------|-------|-------------|
| `VERCEL_TOKEN` | Token de Vercel | Token de acceso para Vercel |
| `VERCEL_ORG_ID` | Team ID de Vercel | ID de la organización/equipo |
| `VERCEL_PROJECT_ID` | Project ID | ID del proyecto en Vercel |
| `NEXT_PUBLIC_SITE_URL` | https://tu-dominio.com | URL del sitio (opcional) |

### Ejemplo Visual:

```
Settings
  └── Secrets and variables
        └── Actions
              └── New repository secret
                    ├── Name: VERCEL_TOKEN
                    ├── Secret: tu_token_aqui
                    └── Add secret
```

---

## 🚀 Cómo Usar

### Desencadenar CI/CD automáticamente:
```bash
git push origin main
```
El workflow se ejecutará automáticamente.

### Manual Deploy:
1. Ve a tu repositorio en GitHub
2. Actions → Manual Deploy to Vercel
3. Run workflow → Selecciona entorno → Run

### Ver logs:
1. GitHub → Actions
2. Selecciona el workflow que ejecutaste
3. Haz clic en la ejecución
4. Ver logs detallados

---

## 📊 Estado de los Workflows

Puedes ver el estado de todos los workflows en la pestaña **Actions** de tu repositorio.

Los badges de estado se pueden añadir al README:

```markdown
![CI/CD Pipeline](https://github.com/nauzael/Portafolio_sucre/workflows/CI%2FCD%20Pipeline/badge.svg)
![Security Scan](https://github.com/nauzael/Portafolio_sucre/workflows/Security%20Scan/badge.svg)
```

---

## 🔒 Mejores Prácticas

✅ **Nunca commits** los secretos al repositorio  
✅ **Usa variables de entorno** en los workflows  
✅ **Revisa los logs** si falla un deploy  
✅ **Mantén tokens actualizados** (rotación periódica)  
✅ **Documenta cambios** en los workflows  

---

## ❓ Solución de Problemas

### ❌ Error: "Deployment failed"
- Verifica que `VERCEL_TOKEN` sea válido
- Confirma que los IDs de Vercel sean correctos
- Revisa que el proyecto en Vercel tenga Next.js habilitado

### ❌ Error: "Build failed"
- Revisa los logs en la pestaña "Build" del workflow
- Verifica que `npm run build` funcione localmente
- Confirma que `NEXT_PUBLIC_SITE_URL` esté correcta

### ❌ Error: "Permission denied"
- Verifica que `VERCEL_ORG_ID` sea correcto
- Asegúrate de que el token tenga permisos suficientes

---

## 📝 Variables de Entorno Disponibles

Dentro de los workflows puedes usar:

```yaml
env:
  NEXT_PUBLIC_SITE_URL: ${{ secrets.NEXT_PUBLIC_SITE_URL }}
  VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

---

## 🔄 Próximos Pasos

1. ✅ Configura los secretos en GitHub
2. ✅ Haz un push a `main` para probar
3. ✅ Verifica el deploy automático en Vercel
4. ✅ Personaliza los workflows según necesites

¡Listo! 🎉 Tus GitHub Actions están configurados.
