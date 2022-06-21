# What is JavaScript?  

JavaScript is a multi-paradigm, dynamic language with types, operators, standard built-in objects, and methods. 

- It supports object-oriented programming with object prototypes, instead of classes.

- And also supports functional programming

Its syntax is based on the Java and C languages.

JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and much more.

A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API.


## ECMAScript

__ECMAScript__ is a JavaScript _standard_ meant to ensure the interoperability of web pages across different web browsers. It is standardized by Ecma International according to the document ECMA-262. ECMAScript is commonly used for client-side scripting on the World Wide Web, and it is increasingly being used for writing server applications and services using Node.js.

The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.

ECMA-262 only specifies language syntax and semantics of the core _API_, such as Array and Function, while valid implementations of JavaScript add their own functionality like input/output or file system handling.

---

# How to insert JavaScript in HTML?

You can add JavaScript code to an HTML document by employing the dedicated HTML tag `<script>`

``` html
<script src="script.js" defer></script>
``` 

If you use the **defer attribute**, both the script and the HTML will load simultaneously.

Scripts loaded with the defer attribute will load in the order they appear on the page. They won't run until the page content has all been loaded, which is useful if your scripts depend on the DOM being in place (e.g., they modify one or more elements on the page).

---

# Variables

A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.

There are three ways of defining your variables in JavaScript : `var`, `let`, and `const`.

Variables are basically names for values (such as numbers, or strings of text). 


### Var 

If you use `var` outside of a function, it belongs to the global scope.

If you use `var` inside of a function, it belongs to that function.

If you use `var` inside of a block, i.e. a for loop, the variable is still available outside of that block.

`var` has a _function_ scope, not a _block_ scope.

```js
var x = 5.6;
```


### Let

**`let`** allows you to declare block-level variables. The declared variable is available from the _block_ it is enclosed in.

`let` is the block scoped version of `var`, and is limited to the block (or expression) where it is defined.

If you use `let` inside of a block, i.e. a for loop, the variable is only available inside of that loop.

`let` has a _block_ scope.

```js
let x = 5.6;
```


### Constant

Constants are also used to name values, but unlike variables, you can't change the value once set. Create a constant with the keyword **const** followed by a name for the constant.

**`const`** allows you to declare variables whose values are never intended to change. The variable is available from the _block_ it is declared in.
 
You can assign a value to your variable or constant with an equal sign (=) followed by the value you want to give it.

Use **const** when you can, and use let **when** you have to.

```js
const x = 5.6;
```

`const` has a _block_ scope.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

-   Reassign a constant value
-   Reassign a constant array
-   Reassign a constant object

But you CAN:

-   Change the elements of constant array
-   Change the properties of constant object


## Dynamic typing

You don't need to specify what data type a variable will contain (numbers, strings, arrays, etc).

JavaScript is a _loosely typed_ and _dynamic_ language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types.


## JavaScript types

There are a few different types of data we can store in variables.

The set of types in the JavaScript language consists of _primitive values_ and _objects_.


### Primitive value

JavaScript provides six type of primitive values that includes **Number, String, Boolean, Undefined, Symbol, and Big-int**.


#### Numbers

You can store numbers in variables, either whole numbers like 30 (also called integers) or decimal numbers like 2.456 (also called floats or floating point numbers)

You can use four types of number literals: decimal, binary, octal, and hexadecimal.


The number type has several _methods_

List of the methods at: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#static_methods)
List of  the methods at: [W3C](https://www.w3schools.com/jsref/jsref_obj_number.asp)


The built-in  `Math` object has properties and methods for mathematical constants and functions.

These include trigonometric, logarithmic, exponential, and other functions.



#### Strings

Strings are pieces of text. When you give a variable a string value, you need to wrap it in single or double quotation marks;

Strings in JavaScript are sequences of _Unicode characters_.


[The methods of String objects](https://www.w3schools.com/jsref/jsref_obj_string.asp).


**Template literals** are string literals allowing embedded expressions. 

You can use _multi-line strings_ and _string interpolation_ features with them.

Template literals are enclosed by the _back-tick_ character instead of double or single quotes. 

Template literals can contain place holders. These are indicated by the Dollar sign and curly braces (`${expression}`).



#### Boolean

Boolean can have two values, _true_ or _false_.



### Objects

In JavaScript, an object is an unordered collection of _key-value_ pairs. 

Each key-value pair is called a _property_. The _key_ of a property can be a string. And the value of a property can be any value.

Functions that are part of objects are called _methods_.


#### Arrays

An array is a single _object_ that contains multiple values enclosed in square brackets and separated by commas. 

An **array** is an ordered list of values that you refer to with a name and an index.

```js

let arr = ['one', 'two', 'three']

arr[2]   // three

```

The index of the elements begins with zero.


**Destructuring**

Destructuring makes it easy to extract only what is needed.

Assigning array items to a variable with destructuring:


```js
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
```

When destructuring arrays, the order that variables are declared is important.

Destructuring comes in handy when a function returns an array:


```js
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);
```


**Spread Operator**

The JavaScript spread operator (`...`) allows us to quickly copy all or part of an existing array or object into another array or object.


```js
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
```


The spread operator is often used in combination with destructuring.


```js

//Assign the first and second items from `numbers` to variables and put the rest in an array:

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
```


The `Array` object has _methods_ for manipulating arrays in various ways, such as joining, reversing, and sorting them. 


There are many JavaScript array methods. You can see the [array methods here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#array_methods "Permalink to Array methods") and [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 
It has a _property_ for determining the array length and other properties for use with regular expressions.
 

**Multi-dimensional arrays**

Arrays can be nested, meaning that an array can contain another array as an element. 

Using this characteristic of JavaScript arrays, multi-dimensional arrays can be created.



#### Functions

**Functions are a special type of object.**

Functions are _reusable blocks of code_ that you can write once and run again and again, saving the need to keep repeating code all the time.

A function is defined by using the keyword _function_, followed by a _name_, with parentheses put after it. After that we put on two curly braces ({ }). Inside the curly braces goes all the code that we want to run whenever we _call_ the function.

When we want to run the code, we type the name of the function followed by the parentheses.

```js
function myFunction(parameter) {
  console.log(parameter) 
}

myFunction('Hallo') // Hallo
myFunction('Bye') // Bye
```

function hoisting only works with function _declarations_—not with function _expressions_.


**Anonymous function**

An anonymous function is that type of function that has _no name_. 


**Rest parameters**

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

[More info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)


**Arrow function**

```jsx
hello = () => "Hello World!";
```

It allows you to create functions in a cleaner way compared to regular functions. 

Arrow functions are best for callbacks or methods like map, reduce, or forEach.

The handling of `this` is also different in arrow functions compared to regular functions. In short, with arrow functions there is no binding of `this`.

In regular functions the `this` keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions, the `this` keyword _always_ represents the object that defined the arrow function.


##### Scopes

Scope — a very important concept when dealing with functions. When you create a function, the variables and other things defined inside the function are inside their own separate scope, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.

A variable defined inside a scope is accessible only within that scope, but inaccessible outside. 

In JavaScript, scopes are created by code blocks, functions, and modules.

---

# Operators

In JavaScript, an operator is **a special symbol used to perform operations on operands (values and variables)**.

There are different types of operators.


**The operators in JavaScript are:**

- Assignment operator
- Comparison operator
- Arithmetic operator
- Logical operator
- String operator
- Ternary operator
- typeof operator


## Assignment operators

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


## Comparison operators

A comparison operator compares its operands and returns a logical value based on whether the comparison is true. The operands can be numerical, string, logical, or object values. 

Strings are compared based on standard lexicographical ordering, using Unicode values.


![Comparison operators](https://user-images.githubusercontent.com/89199369/170280609-03581211-0bea-4956-9208-cf5ba1a3d91f.png)


## Arithmetic operators

An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value. The standard arithmetic operators are addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).

In addition to the standard arithmetic operations (`+`, `-`, `*`, `/`), JavaScript provides the arithmetic operators listed in the following table:

![Arithmetic operators](https://user-images.githubusercontent.com/89199369/170281017-f79bfd81-7b32-4014-9292-3f32851357e0.png)



## Logical operators

Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. However, the `&&` and `||` operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value.

![Logical operators](https://user-images.githubusercontent.com/89199369/170280893-ac0de869-000d-4276-999a-130aade5ebf8.png)


## String operators

In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.


## Ternary operator

The ternary operator is a simplified conditional operator like `if` / `else`.

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.

The use of the ternary operator will make the code shorter in comparison to the IF ELSE statement. The code can be quick in length in comparison to the IF ELSE statement. The readability of the code will increase with the usage of conditional statements. The use of the ternary operator makes the code simpler.


## typeof

The `typeof` operator can help you to find the type of your variable.

The `typeof` operator returns a string indicating the type of the unevaluated operand. 

`operand` is the string, variable, keyword, or object for which the type is to be returned.


## Operator precedence

The _precedence_ of operators determines the order they are applied when evaluating an expression. You can override operator precedence by using parentheses.

---

# Control structures

The control structures within JavaScript **allow the program flow to change within a unit of code or function**. 

These statements can determine whether or not given statements are executed - and provide the basis for the repeated execution of a block of code.

JavaScript has a similar set of control structures to other languages in the **C** family.


## Conditional statements

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

# Event listener

An event listener is a procedure in JavaScript that waits for an event to occur. A simple example of an event is a user clicking the mouse or pressing a key on the keyboard.

You can have multiple handlers for a single event.

Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).

[See a complete list here](https://www.w3schools.com/jsref/dom_obj_event.asp)

---

# JSON

JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.

It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).


**parse()**: Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.

**stringify():** Accepts an object as a parameter, and returns the equivalent JSON string.

Converting a string to a native object is called **deserialization**

converting a native object to a string so it can be transmitted across the network is called **serialization**.

--- 

# Regular expressions

Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.


## Using regular expressions

Regular expressions are used with the [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) methods [`test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) and [`exec()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) .
And with the [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) methods [`match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match), [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [`search()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search), and [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split).


![Regular expressions methods](https://user-images.githubusercontent.com/89199369/171023747-9c8f7ffb-c281-4723-aa55-73a5374166b5.png)

---

# JS Modules

A module in JavaScript is just **a file containing related code**. 

JavaScript modules allow you to break up your code into separate files. This makes it easier to maintain the code-base.

You can export a function or variable from any file.

First of all, you need to include `type="module"` in the `<script>` element, to declare this script as a module.

```js
<script type="module" src="main.js"></script>
```

ES Modules rely on the `import` and `export` statements.

In JavaScript, we use the **import** and **export** keywords to share and receive functionalities respectively across different modules. 

You can only use `import` and `export` statements inside modules, not regular scripts.


There are two types of exports: Named and Default.

 **Named exports**

The export keyword is used to make a variable, function, class or object accessible to other modules.

A  way of exporting all the items you want to export is to use a single **export** statement at the end of your module file, followed by a comma-separated list of the features you want to export wrapped in curly braces.

```js
export { name, draw, reportArea, reportPerimeter };
```


Once you've exported some features out of your module, you need to **import** them into your script to be able to use them. 

```js
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
```


**Default exports**

Export default is **used to export a single class, function or primitive from a script file**.

```js
export default randomSquare;
```

We import the default function using this line:

```js
import randomSquare from './modules/square.js';
```


You can import modules into a file in two ways, based on if they are named exports or default exports.

Named exports must be destructured using curly braces. Default exports do not.

---
