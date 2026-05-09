# Script para configurar secretos de GitHub Actions
# Requisitos: GitHub CLI (gh) instalado y autenticación completada

param(
    [string]$VercelToken,
    [string]$VercelOrgId,
    [string]$VercelProjectId
)

$ErrorActionPreference = "Stop"

# Colores
$colors = @{
    Success = "Green"
    Error   = "Red"
    Warning = "Yellow"
    Info    = "Cyan"
    Bold    = "White"
}

function Write-Success { param([string]$Text); Write-Host "✓ $Text" -ForegroundColor $colors.Success }
function Write-Error { param([string]$Text); Write-Host "✗ $Text" -ForegroundColor $colors.Error }
function Write-Info { param([string]$Text); Write-Host "ℹ $Text" -ForegroundColor $colors.Info }
function Write-Warning { param([string]$Text); Write-Host "⚠ $Text" -ForegroundColor $colors.Warning }

function Write-Header {
    param([string]$Text)
    Write-Host ""
    Write-Host ("=" * 60) -ForegroundColor $colors.Info
    Write-Host $Text -ForegroundColor $colors.Info
    Write-Host ("=" * 60) -ForegroundColor $colors.Info
    Write-Host ""
}

# Configuración del repositorio
$repoOwner = "nauzael"
$repoName = "Portafolio_sucre"
$repoFullName = "$repoOwner/$repoName"

Write-Header "⚙️  CONFIGURADOR DE SECRETOS GITHUB ACTIONS"

Write-Info "Repositorio: $repoFullName"
Write-Info "Verificando GitHub CLI..."

# Verificar GitHub CLI
if (-not (gh --version *>$null 2>&1)) {
    Write-Error "GitHub CLI no está instalado"
    Write-Info "Instálalo desde: https://cli.github.com"
    exit 1
}

Write-Success "GitHub CLI instalado"

# Verificar autenticación
Write-Info "Verificando autenticación con GitHub..."
$authStatus = gh auth status 2>&1
if ($authStatus -match "not logged in") {
    Write-Warning "No estás autenticado con GitHub CLI"
    Write-Info "Ejecutando: gh auth login"
    Write-Info ""
    gh auth login --web
}

Write-Success "Autenticado con GitHub"

# Obtener credenciales si no se proporcionan como parámetros
if (-not $VercelToken) {
    Write-Header "🔑 PASO 1: VERCEL_TOKEN"
    Write-Info "Ve a: https://vercel.com/account/tokens"
    Write-Info "Crea un nuevo token y cópialo"
    $VercelToken = Read-Host "Pega tu VERCEL_TOKEN"
    
    if (-not $VercelToken) {
        Write-Error "Token no proporcionado"
        exit 1
    }
}

if (-not $VercelOrgId) {
    Write-Header "🏢 PASO 2: VERCEL_ORG_ID"
    Write-Info "Ve a tu proyecto en Vercel → Settings → General"
    Write-Info "Busca 'Team ID' y cópialo"
    $VercelOrgId = Read-Host "Pega tu VERCEL_ORG_ID"
    
    if (-not $VercelOrgId) {
        Write-Error "VERCEL_ORG_ID no proporcionado"
        exit 1
    }
}

if (-not $VercelProjectId) {
    Write-Header "📦 PASO 3: VERCEL_PROJECT_ID"
    Write-Info "Ve a tu proyecto en Vercel → Settings → General"
    Write-Info "Busca 'Project ID' y cópialo"
    $VercelProjectId = Read-Host "Pega tu VERCEL_PROJECT_ID"
    
    if (-not $VercelProjectId) {
        Write-Error "VERCEL_PROJECT_ID no proporcionado"
        exit 1
    }
}

# Configurar secretos
Write-Header "🔐 CONFIGURANDO SECRETOS"

$secrets = @{
    "VERCEL_TOKEN"        = $VercelToken
    "VERCEL_ORG_ID"       = $VercelOrgId
    "VERCEL_PROJECT_ID"   = $VercelProjectId
    "NEXT_PUBLIC_SITE_URL" = "https://descubresucre.com"
}

$successCount = 0
$totalCount = $secrets.Count

foreach ($secretName in $secrets.Keys) {
    $secretValue = $secrets[$secretName]
    
    try {
        Write-Info "Configurando $secretName..."
        
        # Usar gh para configurar el secreto
        gh secret set $secretName `
            --repo $repoFullName `
            --body $secretValue
        
        Write-Success "$secretName configurado"
        $successCount++
    }
    catch {
        Write-Error "Error configurando $secretName : $_"
    }
}

# Resumen
Write-Header "📊 RESULTADO FINAL"

Write-Host "Secretos configurados: $successCount/$totalCount" -ForegroundColor $colors.Info

if ($successCount -eq $totalCount) {
    Write-Success "¡Todos los secretos han sido configurados correctamente!"
    Write-Host ""
    Write-Host "✨ PRÓXIMOS PASOS:" -ForegroundColor $colors.Bold
    Write-Host "1. Ve a GitHub: https://github.com/$repoFullName"
    Write-Host "2. Haz un push para trigger los workflows:"
    Write-Host "   git -C 'e:\CRCSI' commit --allow-empty -m 'test: trigger actions' && git -C 'e:\CRCSI' push origin main"
    Write-Host "3. Verifica el estado en: https://github.com/$repoFullName/actions"
    Write-Host ""
    exit 0
} else {
    Write-Error "$($totalCount - $successCount)/$totalCount secretos no fueron configurados"
    exit 1
}
