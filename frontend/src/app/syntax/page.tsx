"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Book, Terminal } from "lucide-react"

export default function SyntaxPage() {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="pt-20 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <Book className="w-12 h-12 text-emerald-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
              AOI <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">Syntax Guide</span>
            </h1>
            <p className="text-gray-300 text-center mb-12 text-lg">
              Learn the simple and elegant syntax of the AOI programming language
            </p>

            {/* Variables */}
            <SyntaxSection
              title="Variables"
              description="Declare and use variables to store values"
              code={`// Variable declaration
var name = "Alice";
var age = 25;
var isStudent = true;

// Variable assignment
age = 26;
name = "Bob";`}
            />

            {/* Functions */}
            <SyntaxSection
              title="Functions"
              description="Define reusable code blocks with parameters and return values"
              code={`// Function declaration
fun greet(name) {
    write("Hello, " + name);
}

// Function with return value
fun add(a, b) {
    return a + b;
}

// Calling functions
greet("Alice");
var sum = add(5, 3);`}
            />

            {/* Control Flow */}
            <SyntaxSection
              title="Control Flow"
              description="Use if/else statements to control program flow"
              code={`// If statement
if (age >= 18) {
    write("Adult");
} else {
    write("Minor");
}

// Nested if
if (score > 90) {
    write("A");
} else if (score > 80) {
    write("B");
} else {
    write("C");
}`}
            />

            {/* Loops */}
            <SyntaxSection
              title="Loops"
              description="Repeat code with while and for loops"
              code={`// While loop
var i = 0;
while (i < 5) {
    write(i);
    i = i + 1;
}

// For loop
for (var j = 0; j < 10; j = j + 1) {
    write(j);
}`}
            />

            {/* Arrays */}
            <SyntaxSection
              title="Arrays"
              description="Store and manipulate collections of values with mutable arrays"
              code={`// Array declaration
var numbers = [1, 2, 3, 4, 5];
var names = ["Alice", "Bob", "Charlie"];
var mixed = [1, "hello", true];

// Array access
var first = numbers[0];      // 1
var second = numbers[1];     // 2

// Array mutation
numbers[0] = 10;
numbers[4] = 99;
write(numbers);              // [10, 2, 3, 4, 99]

// Array with loops
var arr = [5, 2, 8, 1, 9];
var i = 0;
while (i < 5) {
    write(arr[i]);
    i = i + 1;
}

// Bubble Sort Example
var unsorted = [64, 34, 25, 12, 22];
var n = 5;
var i = 0;
while (i < n) {
    var j = 0;
    while (j < n - i - 1) {
        if (unsorted[j] > unsorted[j + 1]) {
            var temp = unsorted[j];
            unsorted[j] = unsorted[j + 1];
            unsorted[j + 1] = temp;
        }
        j = j + 1;
    }
    i = i + 1;
}
write(unsorted);  // [12, 22, 25, 34, 64]`}
            />

            {/* Operators */}
            <SyntaxSection
              title="Operators"
              description="Perform arithmetic, comparison, and logical operations"
              code={`// Arithmetic operators
var sum = 5 + 3;        // 8
var diff = 10 - 4;      // 6
var product = 6 * 7;    // 42
var quotient = 15 / 3;  // 5

// Comparison operators
var isEqual = (5 == 5);        // true
var isNotEqual = (5 != 3);     // true
var isGreater = (10 > 5);      // true
var isLess = (3 < 7);          // true

// Logical operators
var and = true && false;       // false
var or = true || false;        // true
var not = !true;               // false`}
            />

            {/* Recursion */}
            <SyntaxSection
              title="Recursion"
              description="Functions can call themselves to solve problems recursively"
              code={`// Factorial function
fun factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Fibonacci function
fun fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

write(factorial(5));  // 120
write(fib(7));        // 13`}
            />

            {/* Output */}
            <SyntaxSection
              title="Output"
              description="Display values using the write function"
              code={`// Print values
write("Hello, World!");
write(42);
write(true);

// Print variables
var message = "AOI is awesome!";
write(message);

// Print expressions
write(5 + 3);
write("Result: " + (10 * 2));`}
            />

            {/* Important Notes */}
            <div className="mt-12 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center space-x-2">
                <span>⚠️</span>
                <span>Important Notes</span>
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Do not use numbers greater than 145 in recursive functions to avoid stack overflow</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>The <code className="bg-black/30 px-2 py-1 rounded">scan</code> function is currently not functional</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Statements must end with a semicolon (;)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Comments start with // for single-line comments</span>
                </li>
              </ul>
            </div>

            {/* Try it Out */}
            <div className="mt-12 text-center">
              <Link
                href="/ide"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-lg font-semibold transition shadow-lg shadow-emerald-500/20"
              >
                <Terminal className="w-5 h-5" />
                <span>Try These Examples in the IDE</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/60 border-t border-emerald-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Built with  using Rust, Next.js, and TypeScript
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-emerald-400 transition">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SyntaxSection({ title, description, code }: { title: string; description: string; code: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="bg-gray-900/50 rounded-xl p-6 border border-emerald-500/20 overflow-x-auto hover:border-emerald-500/40 transition">
        <pre className="text-gray-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}