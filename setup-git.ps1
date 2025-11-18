# AOI Project - Git Repository Setup Script
# Run this script once to initialize the repository

Write-Host "🚀 Setting up AOI Git Repository..." -ForegroundColor Cyan

# Check if git is installed
if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
    Write-Host "Download from: https://git-scm.com/" -ForegroundColor Yellow
    exit 1
}

# Initialize git repository
Write-Host "`n📦 Initializing Git repository..." -ForegroundColor Yellow
git init

# Add remote
Write-Host "`n🔗 Adding remote repository..." -ForegroundColor Yellow
$remoteUrl = "https://github.com/AadiS27/SPM_Project.git"
git remote add origin $remoteUrl

# Configure git (optional - will use global if available)
Write-Host "`n👤 Configuring Git..." -ForegroundColor Yellow
$userName = git config --global user.name
$userEmail = git config --global user.email

if ([string]::IsNullOrEmpty($userName)) {
    $userName = Read-Host "Enter your name"
    git config user.name $userName
}

if ([string]::IsNullOrEmpty($userEmail)) {
    $userEmail = Read-Host "Enter your email"
    git config user.email $userEmail
}

Write-Host "✓ Using: $userName <$userEmail>" -ForegroundColor Green

# Add all files
Write-Host "`n📁 Adding files to git..." -ForegroundColor Yellow
git add .

# Create initial commit
Write-Host "`n💾 Creating initial commit..." -ForegroundColor Yellow
$commitMessage = @"
Initial commit: AOI Programming Language

- Rust-based interpreter with array support
- Next.js web IDE with syntax highlighting
- AI-powered chatbot with Gemini integration
- Smart autocomplete with 40+ snippets
- Comprehensive documentation
- Example algorithms (binary search, bubble sort, insertion sort)
- Modern responsive UI with dark theme
"@

git commit -m $commitMessage

# Set main branch
Write-Host "`n🌿 Setting up main branch..." -ForegroundColor Yellow
git branch -M main

# Push to GitHub
Write-Host "`n☁️  Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "This may ask for your GitHub credentials..." -ForegroundColor Cyan

try {
    git push -u origin main
    Write-Host "`n✅ Repository successfully set up and pushed to GitHub!" -ForegroundColor Green
    Write-Host "`n📍 Repository URL: $remoteUrl" -ForegroundColor Cyan
    Write-Host "`n🎉 You're all set! Visit your repository on GitHub." -ForegroundColor Green
} catch {
    Write-Host "`n⚠️  Push failed. This might be because:" -ForegroundColor Yellow
    Write-Host "   1. Repository already has content" -ForegroundColor Yellow
    Write-Host "   2. Authentication failed" -ForegroundColor Yellow
    Write-Host "`nTry running: git push -u origin main --force" -ForegroundColor Cyan
}

Write-Host "`n📚 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Visit: https://github.com/AadiS27/SPM_Project" -ForegroundColor White
Write-Host "   2. Check your repository is set up correctly" -ForegroundColor White
Write-Host "   3. Start making changes and commit regularly!" -ForegroundColor White
Write-Host "`n💡 Quick commit command: git add . && git commit -m 'your message' && git push" -ForegroundColor Gray
