# Git Setup Instructions

## Initial Setup (First Time Only)

### 1. Initialize Git Repository

```bash
cd E:\Project\AOI
git init
```

### 2. Add Remote Repository

```bash
git remote add origin https://github.com/AadiS27/SPM_Project.git
```

### 3. Configure Git (if not done globally)

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### 4. Add All Files

```bash
git add .
```

### 5. Create Initial Commit

```bash
git commit -m "Initial commit: AOI Programming Language

- Rust-based interpreter with array support
- Next.js web IDE with syntax highlighting
- AI-powered chatbot assistance
- Comprehensive documentation
- Example algorithms (binary search, bubble sort, insertion sort)"
```

### 6. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## Daily Workflow

### Making Changes

```bash
# 1. Check status
git status

# 2. Add changes
git add .
# Or add specific files
git add frontend/src/components/NewComponent.tsx

# 3. Commit with meaningful message
git commit -m "feat: add new feature"

# 4. Push to GitHub
git push
```

### Commit Message Convention

Use these prefixes:
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Formatting, missing semicolons, etc.
- **refactor**: Code restructuring
- **test**: Adding tests
- **chore**: Maintenance tasks

**Examples:**
```bash
git commit -m "feat: add string length method to interpreter"
git commit -m "fix: resolve array index out of bounds error"
git commit -m "docs: update syntax guide with examples"
git commit -m "style: format code with rustfmt"
git commit -m "refactor: improve parser error handling"
```

### Creating a New Feature Branch

```bash
# Create and switch to new branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: your feature description"

# Push branch to GitHub
git push -u origin feature/your-feature-name
```

### Pulling Latest Changes

```bash
# Pull from main branch
git pull origin main

# Or if on feature branch
git pull origin feature/your-feature-name
```

## Checking Repository Status

```bash
# View status
git status

# View commit history
git log --oneline

# View remote URL
git remote -v

# View branches
git branch -a
```

## Undoing Changes

### Discard local changes (not committed)
```bash
git checkout -- filename
# Or discard all changes
git checkout -- .
```

### Undo last commit (keep changes)
```bash
git reset --soft HEAD~1
```

### Undo last commit (discard changes)
```bash
git reset --hard HEAD~1
```

## Useful Git Commands

```bash
# View differences
git diff

# View differences for specific file
git diff filename

# Show commit details
git show commit-hash

# Create tag for release
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0
```

## .gitignore

The `.gitignore` file is already configured to exclude:
- `node_modules/`
- `target/` (Rust build)
- `.env.local`
- `.next/`
- Build artifacts
- IDE files

## Troubleshooting

### Remote already exists
```bash
git remote remove origin
git remote add origin https://github.com/AadiS27/SPM_Project.git
```

### Push rejected
```bash
# Pull first, then push
git pull origin main --rebase
git push
```

### Merge conflicts
```bash
# Open conflicted files, resolve conflicts
# Then:
git add .
git commit -m "resolve merge conflicts"
git push
```

## GitHub Features

### Creating Issues
1. Go to: https://github.com/AadiS27/SPM_Project/issues
2. Click "New Issue"
3. Describe bug or feature request

### Creating Pull Requests
1. Push your feature branch
2. Go to GitHub repository
3. Click "Pull Request"
4. Select your branch
5. Add description and create PR

## Automated Scripts

### PowerShell Quick Commit Script

Create `quick-commit.ps1`:
```powershell
param(
    [string]$message = "Update code"
)

git add .
git commit -m $message
git push

Write-Host "✅ Changes committed and pushed!" -ForegroundColor Green
```

Usage:
```powershell
.\quick-commit.ps1 "feat: add new feature"
```

---

**Need Help?** Check [Git Documentation](https://git-scm.com/doc) or [GitHub Guides](https://guides.github.com/)
