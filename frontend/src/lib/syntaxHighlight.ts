// AOI Language Syntax Highlighting

export interface Token {
  type: "keyword" | "function" | "string" | "comment" | "number" | "operator" | "identifier" | "text"
  value: string
}

// AOI Keywords
const keywords = new Set([
  "var",
  "fun",
  "if",
  "else",
  "while",
  "for",
  "return",
  "true",
  "false",
  "nil",
  "and",
  "or",
  "not",
])

// Built-in functions
const builtInFunctions = new Set(["write", "scan", "clock"])

// Tokenize AOI code
export function tokenize(code: string): Token[] {
  const tokens: Token[] = []
  let i = 0

  while (i < code.length) {
    const char = code[i]

    // Comments (// style)
    if (char === "/" && code[i + 1] === "/") {
      let comment = ""
      while (i < code.length && code[i] !== "\n") {
        comment += code[i]
        i++
      }
      tokens.push({ type: "comment", value: comment })
      continue
    }

    // Strings (double quotes)
    if (char === '"') {
      let str = '"'
      i++
      while (i < code.length && code[i] !== '"') {
        if (code[i] === "\\") {
          str += code[i] + (code[i + 1] || "")
          i += 2
        } else {
          str += code[i]
          i++
        }
      }
      if (i < code.length) str += code[i++]
      tokens.push({ type: "string", value: str })
      continue
    }

    // Numbers
    if (/\d/.test(char)) {
      let num = ""
      while (i < code.length && /[\d.]/.test(code[i])) {
        num += code[i]
        i++
      }
      tokens.push({ type: "number", value: num })
      continue
    }

    // Operators and punctuation
    if (/[+\-*/%=!<>(){}\[\];,.]/.test(char)) {
      let op = char
      i++
      // Handle two-character operators
      if (i < code.length && /[=<>!]/.test(code[i - 1]) && code[i] === "=") {
        op += code[i]
        i++
      }
      tokens.push({ type: "operator", value: op })
      continue
    }

    // Identifiers (keywords, functions, variables)
    if (/[a-zA-Z_]/.test(char)) {
      let identifier = ""
      while (i < code.length && /[a-zA-Z0-9_]/.test(code[i])) {
        identifier += code[i]
        i++
      }

      if (keywords.has(identifier)) {
        tokens.push({ type: "keyword", value: identifier })
      } else if (builtInFunctions.has(identifier)) {
        tokens.push({ type: "function", value: identifier })
      } else {
        tokens.push({ type: "identifier", value: identifier })
      }
      continue
    }

    // Whitespace and other text
    tokens.push({ type: "text", value: char })
    i++
  }

  return tokens
}

// Convert tokens to HTML with syntax highlighting
export function highlightCode(code: string, theme: "dark" | "light"): string {
  const tokens = tokenize(code)
  const colors = getColorScheme(theme)

  return tokens
    .map((token) => {
      const color = colors[token.type]
      const escapedValue = escapeHtml(token.value)
      return `<span style="color: ${color}">${escapedValue}</span>`
    })
    .join("")
}

// VS Code-like color schemes
function getColorScheme(theme: "dark" | "light") {
  if (theme === "dark") {
    return {
      keyword: "#C586C0", // Purple (like VS Code)
      function: "#DCDCAA", // Yellow
      string: "#CE9178", // Orange/Brown
      comment: "#6A9955", // Green
      number: "#B5CEA8", // Light Green
      operator: "#D4D4D4", // Light Gray
      identifier: "#9CDCFE", // Light Blue
      text: "#D4D4D4", // Default text
    }
  } else {
    return {
      keyword: "#AF00DB", // Purple
      function: "#795E26", // Brown
      string: "#A31515", // Red
      comment: "#008000", // Green
      number: "#098658", // Teal
      operator: "#000000", // Black
      identifier: "#001080", // Blue
      text: "#000000", // Default text
    }
  }
}

// Escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
