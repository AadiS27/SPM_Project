# AOI Language Syntax Guide

Complete reference for the AOI programming language syntax and features.

## Table of Contents

- [Variables](#variables)
- [Data Types](#data-types)
- [Operators](#operators)
- [Control Flow](#control-flow)
- [Functions](#functions)
- [Arrays](#arrays)
- [Comments](#comments)
- [Built-in Functions](#built-in-functions)
- [Examples](#examples)

---

## Variables

Variables in AOI are dynamically typed and declared using the `var` keyword.

### Declaration

```aoi
var name = "Alice";
var age = 25;
var isStudent = true;
var score = 95.5;
```

### Assignment

```aoi
var x = 10;
x = 20;  // Reassignment
x = x + 5;  // Using existing value
```

### Scope

- **Global scope**: Variables declared outside functions
- **Local scope**: Variables declared inside functions

```aoi
var global = "I'm global";

fun myFunction() {
    var local = "I'm local";
    write(global);  // ✓ Can access global
    write(local);   // ✓ Can access local
}

write(global);  // ✓ Can access global
write(local);   // ✗ Error: local not defined
```

---

## Data Types

AOI supports the following data types:

### Numbers

```aoi
var integer = 42;
var float = 3.14;
var negative = -10;
```

### Strings

```aoi
var greeting = "Hello, World!";
var name = "Alice";
var message = greeting + " " + name;  // Concatenation
```

### Booleans

```aoi
var isTrue = true;
var isFalse = false;
```

### Arrays

```aoi
var numbers = [1, 2, 3, 4, 5];
var mixed = [1, "hello", true, 3.14];
var empty = [];
```

### Nil

```aoi
var nothing = nil;
```

---

## Operators

### Arithmetic Operators

```aoi
var sum = 5 + 3;        // Addition: 8
var diff = 10 - 4;      // Subtraction: 6
var product = 6 * 7;    // Multiplication: 42
var quotient = 20 / 4;  // Division: 5
```

### Comparison Operators

```aoi
var isEqual = (5 == 5);       // true
var isNotEqual = (5 != 3);    // true
var isGreater = (10 > 5);     // true
var isLess = (3 < 7);         // true
var isGreaterEq = (5 >= 5);   // true
var isLessEq = (4 <= 10);     // true
```

### Logical Operators

```aoi
var and = true && false;   // false
var or = true || false;    // true
var not = !true;           // false
```

### Operator Precedence

1. `!` (NOT)
2. `*`, `/` (Multiplication, Division)
3. `+`, `-` (Addition, Subtraction)
4. `>`, `<`, `>=`, `<=` (Comparison)
5. `==`, `!=` (Equality)
6. `&&` (AND)
7. `||` (OR)

Use parentheses to override precedence:
```aoi
var result = (5 + 3) * 2;  // 16
var result2 = 5 + 3 * 2;   // 11
```

---

## Control Flow

### If Statement

```aoi
if (age >= 18) {
    write("Adult");
}
```

### If-Else Statement

```aoi
if (score >= 60) {
    write("Pass");
} else {
    write("Fail");
}
```

### If-Else If-Else

```aoi
if (score >= 90) {
    write("A");
} else if (score >= 80) {
    write("B");
} else if (score >= 70) {
    write("C");
} else {
    write("F");
}
```

### While Loop

```aoi
var i = 0;
while (i < 5) {
    write(i);
    i = i + 1;
}
// Output: 0 1 2 3 4
```

### For Loop

```aoi
for (var i = 0; i < 10; i = i + 1) {
    write(i);
}
// Output: 0 1 2 3 4 5 6 7 8 9
```

### Nested Loops

```aoi
for (var i = 1; i <= 3; i = i + 1) {
    for (var j = 1; j <= 3; j = j + 1) {
        write(i * j);
    }
}
```

---

## Functions

### Function Declaration

```aoi
fun functionName(param1, param2) {
    // Function body
    return result;
}
```

### Function Call

```aoi
fun add(a, b) {
    return a + b;
}

var result = add(5, 3);
write(result);  // Output: 8
```

### Functions Without Return

```aoi
fun greet(name) {
    write("Hello, " + name + "!");
}

greet("Alice");  // Output: Hello, Alice!
```

### Recursion

AOI supports recursion with a maximum depth of **145**.

```aoi
fun factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

write(factorial(5));  // Output: 120
```

**⚠️ Warning:** Exceeding recursion limit will cause stack overflow.

### Fibonacci Example

```aoi
fun fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (var i = 0; i < 10; i = i + 1) {
    write(fibonacci(i));
}
// Output: 0 1 1 2 3 5 8 13 21 34
```

---

## Arrays

### Array Creation

```aoi
var numbers = [1, 2, 3, 4, 5];
var names = ["Alice", "Bob", "Charlie"];
var mixed = [1, "hello", true, 3.14];
```

### Array Access

```aoi
var arr = [10, 20, 30, 40, 50];
write(arr[0]);  // Output: 10
write(arr[2]);  // Output: 30
write(arr[4]);  // Output: 50
```

### Array Modification

Arrays in AOI are **mutable**.

```aoi
var arr = [1, 2, 3, 4, 5];
arr[0] = 99;
arr[4] = 88;
write(arr);  // Output: [99, 2, 3, 4, 88]
```

### Array in Loops

```aoi
var arr = [10, 20, 30, 40, 50];

for (var i = 0; i < 5; i = i + 1) {
    write(arr[i]);
}
// Output: 10 20 30 40 50
```

---

## Comments

AOI supports single-line comments using `//`.

```aoi
// This is a single-line comment

var x = 10;  // Inline comment

// Comments are ignored by the interpreter
// Use them to document your code
```

**Note:** Multi-line comments are **not supported**.

---

## Built-in Functions

### write()

Output values to the console.

```aoi
write("Hello, World!");
write(42);
write(true);

var name = "Alice";
write(name);
```

### clock()

Get the current timestamp in seconds.

```aoi
var start = clock();

// Some code here
for (var i = 0; i < 1000; i = i + 1) {
    // Do something
}

var end = clock();
write("Elapsed time: " + (end - start) + " seconds");
```

### scan() ⚠️

**Warning:** The `scan()` function is currently **broken** and should **not be used**.

---

## Examples

### Hello World

```aoi
write("Hello, World!");
```

### Variables and Arithmetic

```aoi
var a = 10;
var b = 5;

var sum = a + b;
var diff = a - b;
var product = a * b;
var quotient = a / b;

write("Sum: " + sum);
write("Difference: " + diff);
write("Product: " + product);
write("Quotient: " + quotient);
```

### Factorial Function

```aoi
fun factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

write(factorial(5));  // Output: 120
write(factorial(7));  // Output: 5040
```

### Binary Search

```aoi
var sortedArray = [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78];
var target = 23;
var left = 0;
var right = 10;
var found = -1;

while (left <= right) {
    var mid = (left + right) / 2;
    var midValue = sortedArray[mid];
    
    if (midValue == target) {
        found = mid;
        left = right + 1;
    }
    if (midValue > target) {
        right = mid - 1;
    }
    if (midValue < target) {
        left = mid + 1;
    }
}

write("Found at index: " + found);  // Output: 5
```

### Bubble Sort

```aoi
var arr = [64, 34, 25, 12, 22, 11, 90];
var n = 7;
var i = 0;

while (i < n) {
    var j = 0;
    while (j < n - i - 1) {
        var current = arr[j];
        var next = arr[j + 1];
        
        if (current > next) {
            arr[j] = next;
            arr[j + 1] = current;
        }
        
        j = j + 1;
    }
    i = i + 1;
}

write(arr);  // Output: [11, 12, 22, 25, 34, 64, 90]
```

### FizzBuzz

```aoi
for (var i = 1; i <= 20; i = i + 1) {
    if (i % 15 == 0) {
        write("FizzBuzz");
    } else if (i % 3 == 0) {
        write("Fizz");
    } else if (i % 5 == 0) {
        write("Buzz");
    } else {
        write(i);
    }
}
```

### Prime Number Check

```aoi
fun isPrime(n) {
    if (n < 2) {
        return false;
    }
    
    for (var i = 2; i < n; i = i + 1) {
        if (n % i == 0) {
            return false;
        }
    }
    
    return true;
}

for (var num = 1; num <= 20; num = num + 1) {
    if (isPrime(num)) {
        write(num);
    }
}
// Output: 2 3 5 7 11 13 17 19
```

---

## Limitations

1. **Recursion Depth**: Maximum 145 recursive calls
2. **No String Interpolation**: Must use concatenation with `+`
3. **No Multi-line Comments**: Only `//` single-line comments
4. **scan() Broken**: Input function is not working
5. **No Array Methods**: No built-in methods like push(), pop(), length()
6. **No Objects**: Only primitive types and arrays

---

## Best Practices

1. **Use meaningful variable names**
   ```aoi
   // Good
   var studentName = "Alice";
   var totalScore = 95;
   
   // Bad
   var x = "Alice";
   var y = 95;
   ```

2. **Add comments for complex logic**
   ```aoi
   // Binary search implementation
   while (left <= right) {
       // ... code
   }
   ```

3. **Keep functions small and focused**
   ```aoi
   // Good - single responsibility
   fun calculateSum(arr) { /* ... */ }
   fun printArray(arr) { /* ... */ }
   
   // Bad - doing too much
   fun calculateAndPrint(arr) { /* ... */ }
   ```

4. **Avoid deep recursion**
   ```aoi
   // Be careful with recursion depth
   factorial(100);  // ✗ Will exceed limit
   factorial(10);   // ✓ Safe
   ```

---

## Getting Help

- **Web IDE**: Use the built-in AI chatbot for syntax questions
- **Documentation**: Visit the syntax guide in the web interface
- **Issues**: Report bugs on [GitHub Issues](https://github.com/AadiS27/AOI/issues)
- **Examples**: Check `Interpreter/src/script.aoi` for working examples

---

**Happy Coding with AOI! 🚀**
