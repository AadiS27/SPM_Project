// AOI Language Autocomplete Knowledge Base

export interface AutocompleteItem {
  label: string
  insertText: string
  detail: string
  type: "keyword" | "function" | "operator" | "snippet"
  description?: string
}

export const aoiAutocompleteItems: AutocompleteItem[] = [
  // Keywords
  {
    label: "var",
    insertText: "var ",
    detail: "Variable declaration",
    type: "keyword",
    description: "Declare a variable: var name = value;",
  },
  {
    label: "fun",
    insertText: "fun ",
    detail: "Function declaration",
    type: "keyword",
    description: "Define a function: fun name(params) { ... }",
  },
  {
    label: "if",
    insertText: "if () {\n\t\n}",
    detail: "Conditional statement",
    type: "keyword",
    description: "Execute code conditionally",
  },
  {
    label: "else",
    insertText: "else {\n\t\n}",
    detail: "Else clause",
    type: "keyword",
    description: "Alternative execution path",
  },
  {
    label: "while",
    insertText: "while () {\n\t\n}",
    detail: "While loop",
    type: "keyword",
    description: "Repeat code while condition is true",
  },
  {
    label: "for",
    insertText: "for (var i = 0; i < 10; i = i + 1) {\n\t\n}",
    detail: "For loop",
    type: "keyword",
    description: "Traditional for loop with initialization, condition, and increment",
  },
  {
    label: "return",
    insertText: "return ",
    detail: "Return statement",
    type: "keyword",
    description: "Return a value from a function",
  },
  {
    label: "true",
    insertText: "true",
    detail: "Boolean true",
    type: "keyword",
    description: "Boolean true value",
  },
  {
    label: "false",
    insertText: "false",
    detail: "Boolean false",
    type: "keyword",
    description: "Boolean false value",
  },
  {
    label: "nil",
    insertText: "nil",
    detail: "Null value",
    type: "keyword",
    description: "Represents null or no value",
  },
  {
    label: "and",
    insertText: "and",
    detail: "Logical AND",
    type: "operator",
    description: "Logical AND operator",
  },
  {
    label: "or",
    insertText: "or",
    detail: "Logical OR",
    type: "operator",
    description: "Logical OR operator",
  },
  {
    label: "not",
    insertText: "not ",
    detail: "Logical NOT",
    type: "operator",
    description: "Logical NOT operator",
  },

  // Built-in Functions
  {
    label: "write",
    insertText: "write();",
    detail: "Output function",
    type: "function",
    description: "Print output to console: write(value);",
  },
  {
    label: "scan",
    insertText: "scan();",
    detail: "Input function (broken)",
    type: "function",
    description: "⚠️ Currently broken - do not use",
  },
  {
    label: "clock",
    insertText: "clock()",
    detail: "Get current time",
    type: "function",
    description: "Returns current timestamp in milliseconds",
  },

  // Code Snippets
  {
    label: "function",
    insertText: "fun functionName(param1, param2) {\n\t// Function body\n\treturn result;\n}",
    detail: "Function template",
    type: "snippet",
    description: "Complete function declaration template",
  },
  {
    label: "if-else",
    insertText: "if (condition) {\n\t// True branch\n} else {\n\t// False branch\n}",
    detail: "If-else statement",
    type: "snippet",
    description: "Complete if-else structure",
  },
  {
    label: "while-loop",
    insertText: "while (condition) {\n\t// Loop body\n}",
    detail: "While loop template",
    type: "snippet",
    description: "While loop structure",
  },
  {
    label: "for-loop",
    insertText: "for (var i = 0; i < limit; i = i + 1) {\n\t// Loop body\n\twrite(i);\n}",
    detail: "For loop template",
    type: "snippet",
    description: "Complete for loop structure",
  },
  {
    label: "recursive-function",
    insertText:
      "fun factorial(n) {\n\tif (n == 0) {\n\t\treturn 1;\n\t}\n\treturn n * factorial(n - 1);\n}\n\n// Call: factorial(5);",
    detail: "Recursive function example",
    type: "snippet",
    description: "Factorial example with recursion",
  },
  {
    label: "fibonacci",
    insertText:
      "fun fibonacci(n) {\n\tif (n <= 1) {\n\t\treturn n;\n\t}\n\treturn fibonacci(n - 1) + fibonacci(n - 2);\n}\n\n// Call: fibonacci(10);",
    detail: "Fibonacci function",
    type: "snippet",
    description: "Fibonacci sequence using recursion",
  },
  {
    label: "countdown",
    insertText:
      "fun countdown(n) {\n\tif (n == 0) {\n\t\treturn;\n\t}\n\twrite(n);\n\tcountdown(n - 1);\n}\n\n// Call: countdown(10);",
    detail: "Countdown function",
    type: "snippet",
    description: "Recursive countdown example",
  },
  {
    label: "sum-array",
    insertText:
      "fun sumArray(arr, index, total) {\n\tif (index >= 10) {\n\t\treturn total;\n\t}\n\treturn sumArray(arr, index + 1, total + arr);\n}",
    detail: "Array sum function",
    type: "snippet",
    description: "Sum values using recursion",
  },
  {
    label: "array",
    insertText: "[1, 2, 3, 4, 5]",
    detail: "Array literal",
    type: "snippet",
    description: "Create an array with multiple values",
  },
  {
    label: "array-declaration",
    insertText: "var arr = [1, 2, 3, 4, 5];",
    detail: "Array variable",
    type: "snippet",
    description: "Declare an array variable",
  },
  {
    label: "array-access",
    insertText: "arr[0]",
    detail: "Array element access",
    type: "snippet",
    description: "Access array element by index",
  },
  {
    label: "array-modify",
    insertText: "arr[index] = value;",
    detail: "Modify array element",
    type: "snippet",
    description: "Change value at specific index",
  },
  {
    label: "bubble-sort",
    insertText:
      "var arr = [64, 34, 25, 12, 22];\nvar n = 5;\nvar i = 0;\n\nwhile (i < n) {\n\tvar j = 0;\n\twhile (j < n - i - 1) {\n\t\tif (arr[j] > arr[j + 1]) {\n\t\t\tvar temp = arr[j];\n\t\t\tarr[j] = arr[j + 1];\n\t\t\tarr[j + 1] = temp;\n\t\t}\n\t\tj = j + 1;\n\t}\n\ti = i + 1;\n}\nwrite(arr);",
    detail: "Bubble sort algorithm",
    type: "snippet",
    description: "Complete bubble sort implementation",
  },
  {
    label: "binary-search",
    insertText:
      "var sortedArr = [2, 5, 8, 12, 16, 23, 38, 45];\nvar target = 23;\nvar left = 0;\nvar right = 7;\nvar found = -1;\n\nwhile (left <= right) {\n\tvar mid = (left + right) / 2;\n\tvar midValue = sortedArr[mid];\n\t\n\tif (midValue == target) {\n\t\tfound = mid;\n\t\tleft = right + 1;\n\t}\n\tif (midValue > target) {\n\t\tright = mid - 1;\n\t}\n\tif (midValue < target) {\n\t\tleft = mid + 1;\n\t}\n}\nwrite(found);",
    detail: "Binary search algorithm",
    type: "snippet",
    description: "Binary search on sorted array",
  },
  {
    label: "array-loop",
    insertText:
      "var arr = [1, 2, 3, 4, 5];\nvar i = 0;\nwhile (i < 5) {\n\twrite(arr[i]);\n\ti = i + 1;\n}",
    detail: "Loop through array",
    type: "snippet",
    description: "Iterate through array elements",
  },
]

/**
 * Get autocomplete suggestions based on current input
 * @param text Current text in the editor
 * @param cursorPosition Current cursor position
 * @returns Filtered autocomplete items
 */
export function getAutocompleteSuggestions(text: string, cursorPosition: number): AutocompleteItem[] {
  // Get the word before cursor
  const textBeforeCursor = text.substring(0, cursorPosition)
  const words = textBeforeCursor.split(/[\s\n\r\t(){}\[\];,.]/)
  const currentWord = words[words.length - 1].toLowerCase()

  if (currentWord.length === 0) {
    return []
  }

  // Filter items that start with the current word
  return aoiAutocompleteItems
    .filter((item) => item.label.toLowerCase().startsWith(currentWord))
    .sort((a, b) => {
      // Prioritize exact matches
      if (a.label.toLowerCase() === currentWord) return -1
      if (b.label.toLowerCase() === currentWord) return 1

      // Then sort by type: keywords > functions > operators > snippets
      const typeOrder = { keyword: 0, function: 1, operator: 2, snippet: 3 }
      const typeCompare = typeOrder[a.type] - typeOrder[b.type]
      if (typeCompare !== 0) return typeCompare

      // Finally alphabetically
      return a.label.localeCompare(b.label)
    })
    .slice(0, 10) // Limit to top 10 suggestions
}

/**
 * Get the word at cursor position for replacement
 * @param text Current text
 * @param cursorPosition Cursor position
 * @returns Object with word start position and the word itself
 */
export function getWordAtCursor(text: string, cursorPosition: number): { start: number; word: string } {
  const textBeforeCursor = text.substring(0, cursorPosition)
  const match = textBeforeCursor.match(/[a-zA-Z_][a-zA-Z0-9_-]*$/)

  if (!match) {
    return { start: cursorPosition, word: "" }
  }

  return {
    start: cursorPosition - match[0].length,
    word: match[0],
  }
}
