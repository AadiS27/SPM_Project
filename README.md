# AOI Programming Language

<div align="center">

![AOI Logo](https://img.shields.io/badge/AOI-Programming%20Language-00C853?style=for-the-badge)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Rust](https://img.shields.io/badge/Rust-1.70+-orange.svg?style=for-the-badge&logo=rust)](https://www.rust-lang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black.svg?style=for-the-badge&logo=next.js)](https://nextjs.org/)


</div>

---

## 📖 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Language Syntax](#language-syntax)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About The Project

AOI is a minimal, interpreted programming language designed for educational purposes and algorithm implementation. It combines a Rust-based interpreter backend with a modern Next.js web frontend, providing an interactive development environment for learning programming concepts.

### Built With

**Backend (Interpreter)**
- 🦀 [Rust](https://www.rust-lang.org/) - High-performance interpreter
- 📦 [Cargo](https://doc.rust-lang.org/cargo/) - Build system and package manager

**Frontend (IDE)**
- ⚛️ [Next.js 15](https://nextjs.org/) - React framework
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Styling
- ✨ [Framer Motion](https://www.framer.com/motion/) - Animations
- 🤖 [Google Gemini AI](https://ai.google.dev/) - Intelligent chatbot assistance

---

## ✨ Features

### Language Features
- ✅ **Variables** - Dynamic typing with `var` keyword
- ✅ **Functions** - First-class functions with recursion support (limit: 145 depth)
- ✅ **Control Flow** - `if/else`, `while`, `for` loops
- ✅ **Arrays** - Mutable arrays with indexing `[1, 2, 3]`
- ✅ **Operators** - Arithmetic, comparison, and logical operators
- ✅ **Comments** - Single-line comments with `//`
- ✅ **Built-in Functions** - `write()`, `clock()`

### IDE Features
- 🖥️ **Interactive Code Editor** - Real-time syntax highlighting
- 🤖 **AI-Powered Chatbot** - Context-aware programming assistance
- 🔍 **Smart Autocomplete** - 40+ code snippets and templates
- 📚 **Comprehensive Documentation** - Built-in syntax guide
- 🎨 **Modern UI** - Dark theme with smooth animations
- 📱 **Responsive Design** - Works on all devices
- 🚀 **Algorithm Library** - Pre-built sorting and searching algorithms

### Example Algorithms Included
- Binary Search
- Bubble Sort
- Insertion Sort
- Fibonacci Sequence
- Factorial Calculation
- Array Manipulation

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   Web Frontend (Next.js)                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   IDE Page   │  │ Syntax Guide │  │   Chatbot    │ │
│  │  Editor UI   │  │ Documentation│  │  (Gemini AI) │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────┐
│              Interpreter Backend (Rust)                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │ Tokenizer│→ │  Parser  │→ │Evaluator │            │
│  └──────────┘  └──────────┘  └──────────┘            │
│         ↓             ↓            ↓                    │
│  ┌─────────────────────────────────────┐              │
│  │    AST (Abstract Syntax Tree)       │              │
│  └─────────────────────────────────────┘              │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- **Rust** 1.70 or higher ([Install Rust](https://rustup.rs/))
- **Node.js** 18+ and npm ([Install Node.js](https://nodejs.org/))
- **Git** ([Install Git](https://git-scm.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AadiS27/SPM_Project.git
   cd SPM_Project
   ```

2. **Set up the Backend (Interpreter)**
   ```bash
   cd Interpreter
   cargo build --release
   ```

3. **Set up the Frontend (IDE)**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure Environment Variables**
   ```bash
   # In frontend directory
   cp .env.example .env.local
   # Edit .env.local and add your Gemini API key
   ```

5. **Run the Development Servers**

   **Terminal 1 - Backend:**
   ```bash
   cd Interpreter
   cargo run src/script.aoi
   ```

   **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 💻 Usage

### Running AOI Scripts

**From Command Line:**
```bash
cd Interpreter
cargo run src/script.aoi
```

**In the Web IDE:**
1. Navigate to `http://localhost:3000/ide`
2. Write or paste your AOI code
3. Click "Run" or use keyboard shortcuts
4. View output in the console panel

### Example Code

```aoi
// Hello World
write("Hello, World!");

// Variables and Functions
var name = "Alice";
var age = 25;

fun greet(person) {
    write("Hello, " + person + "!");
}

greet(name);

// Arrays
var numbers = [64, 34, 25, 12, 22];
write(numbers);

// Bubble Sort
var n = 5;
var i = 0;

while (i < n) {
    var j = 0;
    while (j < n - i - 1) {
        if (numbers[j] > numbers[j + 1]) {
            var temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
        j = j + 1;
    }
    i = i + 1;
}

write(numbers);  // Output: [12, 22, 25, 34, 64]
```

---

## 📚 Language Syntax

### Variables
```aoi
var name = "Alice";
var age = 25;
var isStudent = true;
```

### Functions
```aoi
fun add(a, b) {
    return a + b;
}

var result = add(5, 3);
write(result);  // Output: 8
```

### Control Flow
```aoi
// If-Else
if (age >= 18) {
    write("Adult");
} else {
    write("Minor");
}

// While Loop
var i = 0;
while (i < 5) {
    write(i);
    i = i + 1;
}

// For Loop
for (var j = 0; j < 10; j = j + 1) {
    write(j);
}
```

### Arrays
```aoi
var arr = [1, 2, 3, 4, 5];
write(arr[0]);      // Access: 1
arr[2] = 10;        // Modify
write(arr);         // [1, 2, 10, 4, 5]
```

### Recursion
```aoi
fun factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

write(factorial(5));  // Output: 120
```

**📖 Full Documentation:** See [Syntax Guide](./docs/SYNTAX.md)

---

## 📁 Project Structure

```
AOI/
├── Interpreter/              # Rust-based interpreter backend
│   ├── src/
│   │   ├── main.rs          # Entry point
│   │   ├── token.rs         # Tokenizer/Lexer
│   │   ├── parser.rs        # Parser (AST generation)
│   │   ├── interpreter.rs   # Evaluator/Runtime
│   │   ├── expr.rs          # Expression definitions
│   │   ├── stmt.rs          # Statement definitions
│   │   ├── environment.rs   # Variable scope management
│   │   ├── error.rs         # Error handling
│   │   └── script.aoi       # Example scripts
│   ├── Cargo.toml           # Rust dependencies
│   └── README.md            # Backend documentation
│
├── frontend/                 # Next.js web frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx           # Home page
│   │   │   ├── ide/page.tsx       # Interactive IDE
│   │   │   ├── syntax/page.tsx    # Documentation
│   │   │   └── about/page.tsx     # About page
│   │   ├── components/
│   │   │   ├── ChatBot.tsx        # AI assistant
│   │   │   ├── Sidebar.tsx        # Navigation
│   │   │   └── AutocompleteDropdown.tsx
│   │   └── lib/
│   │       ├── aoiAutocomplete.ts # Autocomplete engine
│   │       ├── chatbotKnowledge.ts # FAQ database
│   │       └── syntaxHighlight.ts  # Syntax highlighting
│   ├── package.json         # Node dependencies
│   └── README.md            # Frontend documentation
│
├── docs/                     # Documentation
│   ├── SYNTAX.md            # Language syntax guide
│   ├── API.md               # API reference
│   └── CONTRIBUTING.md      # Contribution guide
│
├── .gitignore               # Git ignore rules
├── LICENSE                  # MIT License
└── README.md                # This file
```

---

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Please read [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for details on our code of conduct and development process.**

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👥 Contact

**Aadi S** - [@AadiS27](https://github.com/AadiS27)

**Project Link:** [https://github.com/AadiS27/SPM_Project](https://github.com/AadiS27/SPM_Project)

---

## 🙏 Acknowledgments

- [Rust Book](https://doc.rust-lang.org/book/) - Rust programming language documentation
- [Crafting Interpreters](https://craftinginterpreters.com/) - Inspiration for interpreter design
- [Next.js Documentation](https://nextjs.org/docs) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Google Gemini AI](https://ai.google.dev/) - AI-powered assistance

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by [AadiS27](https://github.com/AadiS27)

</div>
