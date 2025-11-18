# Contributing to AOI

First off, thank you for considering contributing to AOI! It's people like you that make AOI such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots if possible**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and explain which behavior you expected to see instead**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the Rust and TypeScript style guides
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

## Development Process

### Setting Up Development Environment

1. **Fork the repository**
   ```bash
   git clone https://github.com/AadiS27/SPM_Project.git
   cd SPM_Project
   ```

2. **Install dependencies**
   ```bash
   # Backend
   cd Interpreter
   cargo build
   
   # Frontend
   cd ../frontend
   npm install
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/my-new-feature
   ```

### Backend Development (Rust)

**Code Style:**
- Follow Rust naming conventions
- Run `cargo fmt` before committing
- Run `cargo clippy` to catch common mistakes
- Add tests for new features

**Testing:**
```bash
cd Interpreter
cargo test
cargo run src/script.aoi
```

### Frontend Development (Next.js)

**Code Style:**
- Use TypeScript for all new files
- Follow React best practices
- Use Tailwind CSS for styling
- Run `npm run lint` before committing

**Testing:**
```bash
cd frontend
npm run dev
npm run build
npm run lint
```

### Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

**Examples:**
```
feat: add string length method
fix: resolve recursion depth issue
docs: update syntax guide with array examples
refactor: improve parser error handling
test: add unit tests for tokenizer
```

### Making Changes

1. **Write clear code** - Make sure your code is readable and well-commented
2. **Add tests** - Include tests for any new functionality
3. **Update documentation** - If you change functionality, update the docs
4. **Keep commits atomic** - One logical change per commit

### Submitting Changes

1. **Push to your fork**
   ```bash
   git push origin feature/my-new-feature
   ```

2. **Open a Pull Request** on GitHub

3. **Wait for review** - Maintainers will review your PR and may request changes

4. **Make requested changes** if needed

5. **Celebrate!** Your contribution is merged! 🎉

## Project Structure

```
SPM_Project/
├── Interpreter/        # Rust backend
│   └── src/
│       ├── main.rs
│       ├── parser.rs
│       ├── interpreter.rs
│       └── ...
├── frontend/           # Next.js frontend
│   └── src/
│       ├── app/
│       ├── components/
│       └── lib/
└── docs/              # Documentation
```

## Style Guides

### Rust Style Guide

* Follow the [Rust Style Guide](https://doc.rust-lang.org/1.0.0/style/)
* Use `cargo fmt` for automatic formatting
* Maximum line length: 100 characters
* Use meaningful variable names

### TypeScript/React Style Guide

* Use functional components with hooks
* Use TypeScript for type safety
* Follow the [Airbnb React Style Guide](https://airbnb.io/javascript/react/)
* Use PascalCase for components
* Use camelCase for functions and variables

### Git Commit Messages

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that don't affect code meaning (formatting, etc.)
* **refactor**: Code change that neither fixes a bug nor adds a feature
* **perf**: Code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to build process or auxiliary tools

## Questions?

Feel free to open an issue with the "question" label, or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to AOI! 🚀
