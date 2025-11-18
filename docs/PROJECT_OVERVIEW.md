# AOI Project Overview

## Project Information

**Project Name:** AOI Programming Language  
**Type:** Educational Interpreter & Web IDE  
**Course:** Software Project Management  
**Repository:** https://github.com/AadiS27/SPM_Project  
**License:** MIT  

## Executive Summary

AOI is a minimal, interpreted programming language designed for educational purposes. The project demonstrates full-stack development skills by combining a high-performance Rust interpreter backend with a modern Next.js web frontend, providing an interactive development environment for learning programming concepts.

## Project Objectives

### Primary Goals
1. **Educational Tool** - Provide a simple language for teaching programming concepts
2. **Interactive Learning** - Web-based IDE with real-time feedback
3. **Algorithm Demonstration** - Built-in examples of common algorithms
4. **Modern Development** - Showcase contemporary software development practices

### Technical Goals
1. Build a functional interpreter from scratch
2. Implement array data structures with mutability
3. Create a user-friendly web interface
4. Integrate AI assistance for learning support
5. Provide comprehensive documentation

## Technology Stack

### Backend (Interpreter)
- **Language:** Rust 1.70+
- **Build Tool:** Cargo
- **Key Components:**
  - Tokenizer/Lexer
  - Parser (AST generation)
  - Interpreter/Evaluator
  - Environment (scope management)

### Frontend (Web IDE)
- **Framework:** Next.js 15.3.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **AI Integration:** Google Gemini AI
- **Key Features:**
  - Syntax-highlighted code editor
  - Smart autocomplete (40+ snippets)
  - AI-powered chatbot
  - Responsive dark theme UI

## Key Features Implemented

### Language Features
✅ Variables (dynamic typing)  
✅ Functions (with recursion support)  
✅ Control flow (if/else, while, for)  
✅ Arrays (mutable, indexed access)  
✅ Operators (arithmetic, comparison, logical)  
✅ Comments (single-line)  
✅ Built-in functions (write, clock)

### IDE Features
✅ Real-time syntax highlighting  
✅ Smart autocomplete with code snippets  
✅ AI-powered chatbot assistance  
✅ Interactive documentation  
✅ Example algorithm library  
✅ Responsive design  
✅ Modern UI/UX  

### Example Algorithms Included
- Binary Search
- Bubble Sort
- Insertion Sort
- Fibonacci Sequence
- Factorial Calculation
- Array Manipulation

## Project Structure

```
SPM_Project/
│
├── Interpreter/              # Backend (Rust)
│   ├── src/
│   │   ├── main.rs          # Entry point
│   │   ├── token.rs         # Lexer/Tokenizer
│   │   ├── parser.rs        # Parser & AST
│   │   ├── interpreter.rs   # Evaluator
│   │   ├── expr.rs          # Expression types
│   │   ├── stmt.rs          # Statement types
│   │   ├── environment.rs   # Variable scoping
│   │   ├── error.rs         # Error handling
│   │   └── script.aoi       # Example scripts
│   ├── Cargo.toml
│   └── README.md
│
├── frontend/                 # Frontend (Next.js)
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx           # Home
│   │   │   ├── ide/page.tsx       # IDE
│   │   │   ├── syntax/page.tsx    # Docs
│   │   │   └── about/page.tsx     # About
│   │   ├── components/
│   │   │   ├── ChatBot.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── AutocompleteDropdown.tsx
│   │   │   └── ...
│   │   └── lib/
│   │       ├── aoiAutocomplete.ts
│   │       ├── chatbotKnowledge.ts
│   │       └── syntaxHighlight.ts
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
├── docs/                     # Documentation
│   ├── SYNTAX.md            # Language reference
│   ├── CONTRIBUTING.md      # Contribution guide
│   ├── QUICKSTART.md        # Setup guide
│   └── GIT_SETUP.md         # Git instructions
│
├── README.md                # Main documentation
├── LICENSE                  # MIT License
├── .gitignore              # Git ignore rules
└── setup-git.ps1           # Git setup script
```

## Development Methodology

### Agile Principles Applied
- **Iterative Development:** Features added incrementally
- **User Stories:** Feature-driven development
- **Continuous Integration:** Regular testing and integration
- **Documentation:** Comprehensive guides and references

### Version Control
- **Git:** Source code management
- **GitHub:** Repository hosting
- **Branching Strategy:** Feature branches
- **Commit Convention:** Semantic commit messages

### Quality Assurance
- **Code Review:** Peer review process
- **Testing:** Unit tests for interpreter
- **Documentation:** Inline comments and guides
- **Error Handling:** Comprehensive error messages

## Software Project Management Aspects

### Planning & Design
✅ Requirements gathering  
✅ System architecture design  
✅ Technology stack selection  
✅ Project structure planning  

### Development
✅ Backend implementation  
✅ Frontend development  
✅ Feature integration  
✅ Testing & debugging  

### Documentation
✅ README with comprehensive overview  
✅ Syntax guide for language features  
✅ Setup and installation guide  
✅ Contributing guidelines  
✅ Code comments and documentation  

### Project Management Tools
✅ Git for version control  
✅ GitHub for collaboration  
✅ Issue tracking system  
✅ Pull request workflow  
✅ Markdown documentation  

### Quality Metrics
- **Code Coverage:** Unit tests for core functionality
- **Documentation:** Comprehensive guides and examples
- **User Experience:** Intuitive UI/UX design
- **Performance:** Fast execution and response times

## Timeline & Milestones

### Phase 1: Core Interpreter ✅
- Tokenizer implementation
- Parser with AST generation
- Basic expression evaluation
- Control flow structures

### Phase 2: Enhanced Features ✅
- Array data structures
- Function definitions
- Recursion support
- Error handling

### Phase 3: Web IDE ✅
- Next.js frontend setup
- Code editor component
- Syntax highlighting
- UI/UX design

### Phase 4: Advanced Features ✅
- Smart autocomplete
- AI chatbot integration
- Documentation system
- Example algorithms

### Phase 5: Polish & Documentation ✅
- Comprehensive README
- Syntax guide
- Setup instructions
- Contributing guidelines

## Challenges & Solutions

### Challenge 1: Array Mutability
**Problem:** Implementing mutable arrays in Rust  
**Solution:** Used `Rc<RefCell<Vec>>` for shared mutable ownership

### Challenge 2: Parser Complexity
**Problem:** Handling nested expressions and precedence  
**Solution:** Recursive descent parsing with precedence climbing

### Challenge 3: IDE Integration
**Problem:** Connecting frontend to backend  
**Solution:** Web-based IDE with example execution

### Challenge 4: AI Integration
**Problem:** Gemini API model compatibility  
**Solution:** Updated to gemini-2.5-flash model

## Future Enhancements

### Language Features
- String methods (length, substring, split)
- Array methods (push, pop, indexOf)
- Break/Continue statements
- Objects/Dictionaries
- Module system

### IDE Features
- Real-time code execution
- Debugger with breakpoints
- Variable explorer
- Performance profiler
- Code formatter

### Project Management Integration
- Built-in testing framework
- Code metrics dashboard
- CI/CD pipeline
- Task tracking system
- Automated documentation

## Learning Outcomes

### Technical Skills
✅ Rust programming  
✅ TypeScript/React development  
✅ Compiler/Interpreter design  
✅ Frontend development  
✅ API integration  

### Software Engineering
✅ Project architecture  
✅ Version control (Git)  
✅ Documentation practices  
✅ Testing strategies  
✅ Code organization  

### Project Management
✅ Agile methodology  
✅ Feature planning  
✅ Timeline management  
✅ Quality assurance  
✅ User-centric design  

## Resources & References

- **Rust Documentation:** https://doc.rust-lang.org/
- **Crafting Interpreters:** https://craftinginterpreters.com/
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/
- **Google Gemini AI:** https://ai.google.dev/

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

## Contact & Support

- **Repository:** https://github.com/AadiS27/SPM_Project
- **Issues:** https://github.com/AadiS27/SPM_Project/issues
- **Author:** Aadi S ([@AadiS27](https://github.com/AadiS27))

---

**This project demonstrates proficiency in:**
- Full-stack development
- Programming language design
- Software project management
- Modern development practices
- Technical documentation
- User experience design

**Status:** Active Development  
**Version:** 1.0.0  
**Last Updated:** November 2025
