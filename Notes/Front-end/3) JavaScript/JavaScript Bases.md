# JavaScript Bases

## What is JavaScript?  
JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and much more.

A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API.

---

## How to insert JavaScript in HTML?
You can add JavaScript code to an HTML document by employing the dedicated HTML tag `<script>`


``` html
<script src="script.js" defer></script>
``` 

If you use the defer attribute, both the script and the HTML will load simultaneously.

Scripts loaded with the defer attribute will load in the order they appear on the page. They won't run until the page content has all been loaded, which is useful if your scripts depend on the DOM being in place (e.g., they modify one or more elements on the page).

---

## Event listener
An event listener is a procedure in JavaScript that waits for an event to occur. A simple example of an event is a user clicking the mouse or pressing a key on the keyboard.

You can have multiple handlers for a single event.

---

## Variables
A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.

Variables are basically names for values (such as numbers, or strings of text). Create a variable with the keyword **let** followed by a name for your variable.

Constants are also used to name values, but unlike variables, you can't change the value once set. Create a constant with the keyword **const** followed by a name for the constant.
 
You can assign a value to your variable or constant with an equal sign (=) followed by the value you want to give it.

Use const when you can, and use let when you have to.


### Variable types
JavaScript is a "dynamically typed language", which means that, unlike some other languages, you don't need to specify what data type a variable will contain (numbers, strings, arrays, etc).

There are a few different types of data we can store in variables.

---

### Numbers
You can store numbers in variables, either whole numbers like 30 (also called integers) or decimal numbers like 2.456 (also called floats or floating point numbers)

You can use four types of number literals: decimal, binary, octal, and hexadecimal.


#### Methods
**Number.parseInt()**	= Parses a string argument and returns an integer of the specified radix or base. Same as the global parseInt() function.

**Number.parseFloat()**	= Parses a string argument and returns a floating point number. Same as the global parseFloat() function.

**toFixed** = is used to convert a number to fixed-point notation (rounding the result where necessary) and return its value as a string.

**Number()** = Returns a number, converted from its argument.  

The built-in **Math** object has properties and methods for mathematical constants and functions.

These include trigonometric, logarithmic, exponential, and other functions.

 The `Math` object has a large variety of methods.

 you can use the **Date** object and its methods to work with dates and times in your applications. The `Date` object has a large number of methods for setting, getting, and manipulating dates.

---


### Arrays
An array is a single object that contains multiple values enclosed in square brackets and separated by commas. 

---

### Strings
Strings are pieces of text. When you give a variable a string value, you need to wrap it in single or double quotation marks;

Escaping characters in a string
Template literals.

#### the methods of String objects.
https://www.w3schools.com/jsref/jsref_obj_string.asp

![[string.methods.png]]
![string methods](https://user-images.githubusercontent.com/89199369/170275096-17ed89c4-67a9-41c5-a805-96a55be110a4.png)

#### Multi-line template literals
[Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

Template literals are enclosed by the back-tick ([grave accent](https://en.wikipedia.org/wiki/Grave_accent)) character instead of double or single quotes. Template literals can contain place holders. These are indicated by the Dollar sign and curly braces (`${expression}`).

---

### Booleans
Booleans are true/false values — they can have two values, true or false.

---

### Objects
In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property. The key of a property can be a string. And the value of a property can be any value.

Functions that are part of objects are called methods.

---

## Operators
In JavaScript, an operator is **a special symbol used to perform operations on operands (values and variables)**.

There are different types of operators.

### Assignment operators
In general, assignments are used within a variable declaration.

An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (`=`), which assigns the value of its right operand to its left operand.

Assignment

`x = f()`

`x = f()`

Addition assignment

`x += f()`

`x = x + f()`

Subtraction assignment

`x -= f()`

`x = x - f()`

Multiplication assignment

`x *= f()`

`x = x * f()`

Division assignment

`x /= f()`

`x = x / f()`

Remainder assignment

`x %= f()`

`x = x % f()`

Exponentiation assignment

`x **= f()`


### Comparison operators
A comparison operator compares its operands and returns a logical value based on whether the comparison is true. The operands can be numerical, string, logical, or object values. 

Strings are compared based on standard lexicographical ordering, using Unicode values.

![[Comparison.operators.png]]


### Arithmetic operators
An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value. The standard arithmetic operators are addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).

In addition to the standard arithmetic operations (`+`, `-`, `*`, `/`), JavaScript provides the arithmetic operators listed in the following table:

![[Arithmetic.operators.png]]

### Operator precedence
The _precedence_ of operators determines the order they are applied when evaluating an expression. You can override operator precedence by using parentheses.

### Logical operators
Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. However, the `&&` and `||` operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value.

![[Logical.operators.png]]

### String operators
In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.

### Ternary operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.

The use of the ternary operator will make the code shorter in comparison to the IF ELSE statement. The code can be quick in length in comparison to the IF ELSE statement. The readability of the code will increase with the usage of conditional statements. The use of the ternary operator makes the code simpler.

## typeof
The `typeof` operator returns a string indicating the type of the unevaluated operand. `operand` is the string, variable, keyword, or object for which the type is to be returned.

---

## Functions
Functions are reusable blocks of code that you can write once and run again and again, saving the need to keep repeating code all the time.

A function is defined by using the keyword function, followed by a name, with parentheses put after it. After that we put on two curly braces ({ }). Inside the curly braces goes all the code that we want to run whenever we call the function.

When we want to run the code, we type the name of the function followed by the parentheses.

function hoisting only works with function _declarations_—not with function _expressions_.

### Anonymous function
 An anonymous function is that type of function that has no name or we can say which is without any name. When we create an anonymous function, it is declared without any identifier. It is the difference between a normal function and an anonymous function.

### Rest parameters
The rest parameter syntax allows us to represent an indefinite number of arguments as an array.


### Arrow function
It allows you to create functions in a cleaner way compared to regular functions. 

Arrow functions are best for callbacks or methods like map, reduce, or forEach.


### Scopes
Scope — a very important concept when dealing with functions. When you create a function, the variables and other things defined inside the function are inside their own separate scope, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.

The scope is a policy that manages the availability of variables. A variable defined inside a scope is accessible only within that scope, but inaccessible outside. In JavaScript, scopes are created by code blocks, functions, and modules.

---

## conditional statements
The conditional statements in JavaScript are used for checking a specific condition and executing the code based on the specified condition.

### switch statements
The switch statement executes a block of code depending on different cases. The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions. Use switch to select one of the many blocks of code to be executed.

### IF-ELSE
The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed. The if/else statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.



### Throw, and Try... Catch... Finally
The `try` statement allows you to define a block of code to be tested for errors while it is being executed.

The `catch` statement allows you to define a block of code to be executed, if an error occurs in the try block.

The `throw` statement defines a custom error.

If you use `throw` together with `try` and `catch`, you can control program flow and generate custom error messages.

The `finally` statement defines a code  block to run regardless of the result.

---

## Loops
There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times.

### For
A JavaScript for loop executes a block of code as long as a specified condition is true. The condition expression is evaluated on every loop. A loop continues to run if the expression returns true. Loops repeat the same block of code until a certain condition is met.

If you want to exit a loop before all the iterations have been completed, you can use the **break** statement

The **continue** statement works in a similar manner to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop.

### While
The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

### Do While
The syntax is: do { statements } while (condition); Here's what it does. First, the statements are executed, then the condition is tested; if it is true , then the entire loop is executed again.

### For of
The basic tool for looping through a collection is the for...of loop.

The `for...of` statement creates a loop Iterating over iterable objects (including `Array`, `Map`, `Set`, `arguments` objects and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
JavaScript also has more specialized loops for collections.

You can use map() to do something to each item in a collection and create a new collection containing the changed items.

You can use filter() to test each item in a collection, and create a new collection containing only items that match.

### For in
The `for...in` statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements.

---

## JSON
JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.

It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).


**parse()**: Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.

**stringify():** Accepts an object as a parameter, and returns the equivalent JSON string.

Converting a string to a native object is called **deserialization**

converting a native object to a string so it can be transmitted across the network is called **serialization**.




