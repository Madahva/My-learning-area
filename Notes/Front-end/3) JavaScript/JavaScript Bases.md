# JavaScript Bases

## What is JavaScript?  

JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and much more.

A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API.

## How to insert JavaScript in HTML?

You can add JavaScript code in an HTML document by employing the dedicated HTML tag `<script>`


``` html
<script src="script.js" defer></script>
``` 

If you use the defer attribute, both the script and the HTML will load simultaneously.

Scripts loaded with the defer attribute will load in the order they appear on the page. They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM being in place (e.g. they modify one or more elements on the page).


## Event listener

An event listener is a procedure in JavaScript that waits for an event to occur. The simple example of an event is a user clicking the mouse or pressing a key on the keyboard.

you can have multiple handlers for a single event.

## Variables

A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.

Variables are basically names for values (such as numbers, or strings of text). You create a variable with the keyword **let** followed by a name for your variable.

Constants are also used to name values, but unlike variables, you can't change the value once set. You create a constant with the keyword **const** followed by a name for the constant.
 
You can assign a value to your variable or constant with an equals sign (=) followed by the value you want to give it.

Use const when you can, and use let when you have to.


**Variable types**
JavaScript is a "dynamically typed language", which means that, unlike some other languages, you don't need to specify what data type a variable will contain (numbers, strings, arrays, etc).

There are a few different types of data we can store in variables.
### Numbers
You can store numbers in variables, either whole numbers like 30 (also called integers) or decimal numbers like 2.456 (also called floats or floating point numbers)

**Arithmetic operators
Comparison operators
Assignment operators**

**Methods**

toFixed = is used to convert a number to fixed-point notation (rounding the result where necessary) and return its value as a string.

Number() = Returns a number, converted from its argument.  

### Arrays

An array is a single object that contains multiple values enclosed in square brackets and separated by commas. 

### Strings

Strings are pieces of text. When you give a variable a string value, you need to wrap it in single or double quote marks;

Escaping characters in a string
Template literals
### Booleans

Booleans are true/false values — they can have two values, true or false.

### Objects
In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property. The key of a property can be a string. And the value of a property can be any value.

Functions that are part of objects are called methods.


## Functions

Functions are reusable blocks of code that you can write once and run again and again, saving the need to keep repeating code all the time.

A function is defined by using the keyword function, followed by a name, with parentheses put after it. After that we put two curly braces ({ }). Inside the curly braces goes all the code that we want to run whenever we call the function.

When we want to run the code, we type the name of the function followed by the parentheses.

``` Js
function doThings(){
	// Ok
}
``` 

### Anonymous function

 An anonymous function is that type of function that has no name or we can say which is without any name. When we create an anonymous function, it is declared without any identifier. It is the difference between a normal function and an anonymous function.


### Arrow function

It allows you to create functions in a cleaner way compared to regular functions. 

Arrow functions are best for callbacks or methods like map, reduce, or forEach.


### Scopes

Scope — a very important concept when dealing with functions. When you create a function, the variables and other things defined inside the function are inside their own separate scope, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.

The scope is a policy that manages the availability of variables. A variable defined inside a scope is accessible only within that scope, but inaccessible outside. In JavaScript, scopes are created by code blocks, functions, modules.

## conditional statements


The conditional statements in JavaScript are used for checking a specific condition and executing the code based on the specified condition.

### switch statements
The switch statement executes a block of code depending on different cases. The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions. Use switch to select one of many blocks of code to be executed.

### IF-ELSE
The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed. The if/else statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.

### Ternary operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.

The use of the ternary operator will make the code shorter in comparison to the IF ELSE statement. The code can be quick in length in comparison to the IF ELSE statement. The readability of the code will increase with the usage of conditional statements. The use of the ternary operator makes the code simpler.


## Loops

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

JavaScript also has more specialized loops for collections.

You can use map() to do something to each item in a collection and create a new collection containing the changed items.

You can use filter() to test each item in a collection, and create a new collection containing only items that match.


## JSON

JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.

It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).


**parse()**: Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.

**stringify():** Accepts an object as a parameter, and returns the equivalent JSON string.

Converting a string to a native object is called **deserialization**

converting a native object to a string so it can be transmitted across the network is called **serialization**.




