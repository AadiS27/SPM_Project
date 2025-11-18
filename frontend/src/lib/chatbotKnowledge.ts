// Predefined knowledge base for AOI syntax
export interface FAQItem {
  question: string
  keywords: string[]
  answer: string
  codeExample?: string
}

export const aoiKnowledge: FAQItem[] = [
  {
    question: "How do I declare a variable in AOI?",
    keywords: ["variable", "declare", "var", "assignment"],
    answer: "In AOI, you declare variables using the 'var' keyword followed by the variable name and optional assignment.",
    codeExample: "var name = \"Alice\";\nvar age = 25;\nvar isStudent = true;"
  },
  {
    question: "How do I create a function?",
    keywords: ["function", "fun", "define", "method"],
    answer: "Functions in AOI are declared using the 'fun' keyword, followed by the function name, parameters in parentheses, and the function body in curly braces.",
    codeExample: "fun greet(name) {\n    write(\"Hello, \" + name);\n}\n\nfun add(a, b) {\n    return a + b;\n}"
  },
  {
    question: "How do I use if-else statements?",
    keywords: ["if", "else", "condition", "conditional"],
    answer: "AOI supports if-else statements for conditional logic. Use 'if' for the condition and 'else' for the alternative.",
    codeExample: "if (age >= 18) {\n    write(\"Adult\");\n} else {\n    write(\"Minor\");\n}"
  },
  {
    question: "How do loops work in AOI?",
    keywords: ["loop", "while", "for", "iterate", "repeat"],
    answer: "AOI supports both 'while' and 'for' loops. While loops continue as long as the condition is true, and for loops iterate a specific number of times.",
    codeExample: "// While loop\nvar i = 0;\nwhile (i < 5) {\n    write(i);\n    i = i + 1;\n}\n\n// For loop\nfor (var j = 0; j < 10; j = j + 1) {\n    write(j);\n}"
  },
  {
    question: "How do I use arrays in AOI?",
    keywords: ["array", "list", "collection", "index", "element", "mutable"],
    answer: "AOI supports mutable arrays that can store multiple values. You can create arrays with square brackets, access elements by index, and modify them.",
    codeExample: "// Create arrays\nvar numbers = [1, 2, 3, 4, 5];\nvar names = [\"Alice\", \"Bob\", \"Charlie\"];\n\n// Access elements\nvar first = numbers[0];  // 1\nvar second = names[1];   // \"Bob\"\n\n// Modify arrays\nnumbers[0] = 10;\nnames[2] = \"David\";\nwrite(numbers);  // [10, 2, 3, 4, 5]"
  },
  {
    question: "How do I implement bubble sort?",
    keywords: ["bubble sort", "bubble"],
    answer: "You can implement bubble sort using nested loops and array indexing. It compares adjacent elements and swaps them if they're in the wrong order.",
    codeExample: "var arr = [64, 34, 25, 12, 22];\nvar n = 5;\nvar i = 0;\n\nwhile (i < n) {\n    var j = 0;\n    while (j < n - i - 1) {\n        if (arr[j] > arr[j + 1]) {\n            var temp = arr[j];\n            arr[j] = arr[j + 1];\n            arr[j + 1] = temp;\n        }\n        j = j + 1;\n    }\n    i = i + 1;\n}\nwrite(arr);  // [12, 22, 25, 34, 64]"
  },
  {
    question: "How do I implement insertion sort?",
    keywords: ["insertion sort", "insertion"],
    answer: "Insertion sort builds the sorted array one item at a time by inserting each element into its correct position. It's efficient for small arrays.",
    codeExample: "var arr = [64, 34, 25, 12, 22];\nvar n = 5;\nvar i = 1;\n\nwhile (i < n) {\n    var key = arr[i];\n    var j = i - 1;\n    \n    while (j >= 0 && arr[j] > key) {\n        arr[j + 1] = arr[j];\n        j = j - 1;\n    }\n    arr[j + 1] = key;\n    i = i + 1;\n}\nwrite(arr);  // [12, 22, 25, 34, 64]"
  },
  {
    question: "How do I print output?",
    keywords: ["print", "output", "write", "display", "console"],
    answer: "Use the 'write()' function to display output in AOI.",
    codeExample: "write(\"Hello, World!\");\nwrite(42);\nvar message = \"AOI is awesome!\";\nwrite(message);"
  },
  {
    question: "What operators does AOI support?",
    keywords: ["operator", "arithmetic", "comparison", "logical", "+", "-", "*", "/"],
    answer: "AOI supports arithmetic operators (+, -, *, /), comparison operators (==, !=, >, <, >=, <=), and logical operators (&&, ||, !).",
    codeExample: "// Arithmetic\nvar sum = 5 + 3;\nvar product = 6 * 7;\n\n// Comparison\nvar isEqual = (5 == 5);\nvar isGreater = (10 > 5);\n\n// Logical\nvar and = true && false;\nvar or = true || false;\nvar not = !true;"
  },
  {
    question: "How do I create recursive functions?",
    keywords: ["recursion", "recursive", "factorial", "fibonacci"],
    answer: "AOI supports recursion. A function can call itself, but be careful with the recursion limit (max 145).",
    codeExample: "fun factorial(n) {\n    if (n <= 1) {\n        return 1;\n    }\n    return n * factorial(n - 1);\n}\n\nfun fib(n) {\n    if (n <= 1) {\n        return n;\n    }\n    return fib(n - 1) + fib(n - 2);\n}"
  },
  {
    question: "What are the limitations of AOI?",
    keywords: ["limitation", "limit", "restriction", "maximum", "error"],
    answer: "AOI has a recursion limit of 145 to avoid stack overflow. The scan() function is currently broken and should not be used.",
    codeExample: "// Do NOT use numbers > 145 in recursion\n// WRONG: factorial(150) will cause stack overflow\n// RIGHT: factorial(10) works fine\n\n// Do NOT use scan() - it's broken\n// Use write() for output instead"
  },
  {
    question: "How do I comment my code?",
    keywords: ["comment", "//", "documentation", "note"],
    answer: "AOI supports single-line comments using '//' at the beginning of the line.",
    codeExample: "// This is a comment\nvar x = 10;  // This is also a comment\n\n// Comments help document your code\nfun calculate(n) {\n    // Perform calculation\n    return n * 2;\n}"
  },
  {
    question: "Can I concatenate strings?",
    keywords: ["string", "concatenate", "concat", "join", "combine"],
    answer: "Yes! Use the '+' operator to concatenate strings in AOI.",
    codeExample: "var firstName = \"John\";\nvar lastName = \"Doe\";\nvar fullName = firstName + \" \" + lastName;\nwrite(fullName);  // Output: John Doe"
  }
]

export function findAnswer(query: string): FAQItem | null {
  const lowerQuery = query.toLowerCase()
  
  // First pass: Check for exact phrase matches (higher priority)
  for (const item of aoiKnowledge) {
    for (const keyword of item.keywords) {
      if (lowerQuery.includes(keyword.toLowerCase()) && keyword.includes(' ')) {
        // Prioritize multi-word keyword matches (like "insertion sort", "bubble sort")
        return item
      }
    }
  }
  
  // Second pass: Check for single keyword matches
  for (const item of aoiKnowledge) {
    const hasKeyword = item.keywords.some(keyword => 
      lowerQuery.includes(keyword.toLowerCase())
    )
    
    if (hasKeyword) {
      return item
    }
  }
  
  // No match found - let AI handle it
  return null
}
