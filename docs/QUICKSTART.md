# Quick Start Guide

Get AOI up and running in 5 minutes!

## Prerequisites

Make sure you have these installed:
- **Rust** 1.70+ → [Install](https://rustup.rs/)
- **Node.js** 18+ → [Install](https://nodejs.org/)
- **Git** → [Install](https://git-scm.com/)

## Step 1: Clone the Repository

```bash
git clone https://github.com/AadiS27/SPM_Project.git
cd SPM_Project
```

## Step 2: Setup Backend (Interpreter)

```bash
cd Interpreter
cargo build --release
cargo run src/script.aoi
```

You should see output from the example script! ✅

## Step 3: Setup Frontend (IDE)

Open a new terminal:

```bash
cd frontend
npm install
```

Create `.env.local` file:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Gemini API key:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_actual_api_key_here
```

Get API key from: https://ai.google.dev/

## Step 4: Run the Development Server

```bash
npm run dev
```

Open browser: **http://localhost:3000** 🚀

## Step 5: Try the IDE

1. Navigate to the IDE page
2. Write some AOI code:
   ```aoi
   var message = "Hello, AOI!";
   write(message);
   ```
3. Click Run or press Ctrl+Enter

## Troubleshooting

### Port already in use
```bash
# Frontend will auto-switch to port 3001
# Or manually specify:
npm run dev -- -p 3002
```

### Rust compilation errors
```bash
# Update Rust
rustup update

# Clean build
cargo clean
cargo build
```

### Node modules issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

- 📚 Read the [Syntax Guide](./SYNTAX.md)
- 🤝 Check [Contributing Guide](./CONTRIBUTING.md)
- 💬 Ask questions in [Discussions](https://github.com/AadiS27/SPM_Project/discussions)

**Happy Coding! 🎉**
