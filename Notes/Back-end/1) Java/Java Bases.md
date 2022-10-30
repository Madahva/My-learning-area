


# What is Java?


Java is a general-purpose programming language intended to let programmers write once, run anywhere (WORA). This means that compiled Java code can run on all platforms that support Java without the need to recompile.

Java is a popular programming language, created in 1995.

It is owned by Oracle, and more than **3 billion** devices run Java.

It is used for:

-   Mobile applications (specially Android apps)
-   Desktop applications
-   Web applications
-   Web servers and application servers
-   Games
-   Database connection
-   And much, much more!


---


# Java Syntax


When we consider a Java program, it can be defined as a collection of objects that communicate via invoking each other's methods.

About Java programs, it is very important to keep in mind the following points.

-   **Case Sensitivity** − Java is case sensitive, which means identifier **Hello** and **hello** would have different meaning in Java.

-   **Class Names** − For all class names the first letter should be in Upper Case. If several words are used to form a name of the class, each inner word's first letter should be in Upper Case.
   
-   **Method Names** − All method names should start with a Lower Case letter. If several words are used to form the name of the method, then each inner word's first letter should be in Upper Case.   
   
-   **Program File Name** − Name of the program file should exactly match the class name.

-   **public static void main(String args[])** − Java program processing starts from the main() method which is a mandatory part of every Java program.



## The main Method


The `main()` method is required and you will see it in every Java program:

```java
public static void main(String[] args)
```


Any code inside the `main()` method will be executed.



## Comments in Java


Java supports single-line and multi-line comments very similar to C and C++. All characters available inside any comment are ignored by Java compiler.


```java
public class MyFirstJavaProgram {

   /* This is my first java program.
    * This will print 'Hello World' as the output
    * This is an example of multi-line comments.
    */

   public static void main(String []args) {
      // This is an example of single line comment
      /* This is also an example of single line comment. */
      System.out.println("Hello World");
   }
}
```



## Java Modifiers


Like other languages, it is possible to modify classes, methods, etc., by using modifiers. There are two categories of modifiers:

-   **Access Modifiers** − default, public , protected, private

-   **Non-access Modifiers** − final, abstract, strictfp



## Java Identifiers


All Java components require names. Names used for classes, variables, and methods are called **identifiers**.

All Java **variables** must be **identified** with **unique names**.

These unique names are called **identifiers**.

**Note:** It is recommended to use descriptive names in order to create understandable and maintainable code.


The general rules for naming variables are:

-   Names can contain letters, digits, underscores, and dollar signs
-   Names must begin with a letter
-   Names should start with a lowercase letter and it cannot contain whitespace
-   Names can also begin with $ and _
-   Names are case sensitive ("myVar" and "myvar" are different variables)
-   Reserved words (like Java keywords, such as `int` or `boolean`) cannot be used as names


---


# Java Variables


Variables are containers for storing data values.

In Java, there are different **types** of variables, for example:

-   `String` - stores text, such as "Hello". String values are surrounded by double quotes
-   `int` - stores integers (whole numbers), without decimals, such as 123 or -123
-   `float` - stores floating point numbers, with decimals, such as 19.99 or -19.99
-   `char` - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
-   `boolean` - stores values with two states: true or false


To create a variable, you must specify the type and assign it a value:

**Syntax**
```java
type variableName = value;
```



## Declare Many Variables


To declare more than one variable of the **same type**, you can use a comma-separated list:

```java
int x = 5, y = 6, z = 50;
```



## One Value to Multiple Variables


You can also assign the **same value** to multiple variables in one line:

```java
int x, y, z;
x = y = z = 50;
```



## Final Variables


If you don't want others (or yourself) to overwrite existing values, use the `final` keyword (this will declare the variable as "final" or "constant", which means unchangeable and read-only):

**Example**
```java
final int myNum = 15;
myNum = 20;  // will generate an error: cannot assign a value to a final variable
```


---


# Java Data Types


Data types are divided into two groups:

-   Primitive data types - includes `byte`, `short`, `int`, `long`, `float`, `double`, `boolean` and `char`
-   Non-primitive data types - such as `String`, `Arrays` and `Classes`.


**A demonstration of how to declare variables of other types:**

```java
int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99f;    // Floating point number
char myLetter = 'D';         // Character
boolean myBool = true;       // Boolean
String myText = "Hello";     // String

```



## Primitive Data Types


A primitive data type specifies the size and type of variable values, and it has no additional methods.

**There are eight primitive data types in Java:**

![[Pasted image 20221026190402.png]]



### Numbers


Primitive number types are divided into two groups:

**Integer types** stores whole numbers, positive or negative (such as 123 or -456), without decimals. Valid types are `byte`, `short`, `int` and `long`. Which type you should use, depends on the numeric value.

**Floating point types** represents numbers with a fractional part, containing one or more decimals. There are two types: `float` and `double`.



#### Java Math


The class `Math` contains many methods for performing basic numeric operations such as the elementary exponential, logarithm, square root, and trigonometric functions.


**You can see all the methods here:** https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html



### Booleans


A Boolean data type is a value that can only be either `true` or `false`. Boolean values are mostly used for conditional testing.

```java
boolean isJavaFun = true;
boolean isFishTasty = false;

System.out.println(isJavaFun);     // Outputs true
System.out.println(isFishTasty);   // Outputs false
```



### Characters


The `char` data type is used to store a **single** character. The character must be surrounded by single quotes, like 'A' or 'c':



## Non-Primitive Data Types


Non-primitive data types are called **reference types** because they refer to objects.

The main difference between **primitive** and **non-primitive** data types are:

-   Primitive types are predefined (already defined) in Java. Non-primitive types are created by the programmer and is not defined by Java (except for `String`).
-   Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot.
-   A primitive type has always a value, while non-primitive types can be `null`.
-   A primitive type starts with a lowercase letter, while non-primitive types starts with an uppercase letter.
-   The size of a primitive type depends on the data type, while non-primitive types have all the same size.

Examples of non-primitive types are [Strings](https://www.w3schools.com/java/java_strings.asp), [Arrays](https://www.w3schools.com/java/java_arrays.asp), [Classes,](https://www.w3schools.com/java/java_classes.asp) [Interface](https://www.w3schools.com/java/java_interface.asp), etc. You will learn more about these in a later chapter.



### Strings


The `String` data type is used to store a sequence of characters (text). String values must be surrounded by double quotes:

```java
String greeting = "Hello World";
System.out.println(greeting);
```


A String in Java is actually a **non-primitive** data type, because it refers to an object. The String object has methods that are used to perform certain operations on strings.


**There are many string methods available**


#### String Concatenation


The `+` operator can be used between strings to combine them. This is called **concatenation**:

```java
String firstName = "John";
String lastName = "Doe";
System.out.println(firstName + " " + lastName + " ☺"); // John Doe ☺
```


You can also use the `concat()` method to concatenate two strings.


### Escape sequences


Because strings must be written within quotes, Java will misunderstand this string, and generate an error:

```java
String txt = "We are the so-called "Vikings" from the north.";
```


The solution to avoid this problem, is to use the **backslash escape character**.

The backslash (`\`) escape character turns special characters into string characters:

```java
String txt = "We are the so-called \"Vikings\" from the north.";
// We are the so-called "Vikings" from the north.
```


**Other common escape sequences that are valid in Java are:**

![[Pasted image 20221029101733.png]]



### Java Arrays

Arrays are objects that store multiple variables of the same type. However, an array itself is an object on the heap.

Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

To declare an array, define the variable type with **square brackets**. To insert values to it, you can place the values in a comma-separated list, inside curly braces:

**Example**
```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
```


You can access an array element by referring to the index number.

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
cars[0] = "Opel";
System.out.println(cars[0]);
// Now outputs Opel instead of Volvo
```


**Note:** Array indexes start with 0: [0] is the first element. [1] is the second element, etc.



## Java Type Casting


Type casting is when you assign a value of one primitive data type to another type.

In Java, there are two types of casting:

**Widening Casting** (automatically) - converting a smaller type to a larger type size  
`byte` -> `short` -> `char` -> `int` -> `long` -> `float` -> `double`  

Widening casting is done automatically when passing a smaller size type to a larger size type:

```java
int myInt = 9;
double myDouble = myInt; // Automatic casting: int to double
```


**Narrowing Casting** (manually) - converting a larger type to a smaller size type  
`double` -> `float` -> `long` -> `int` -> `char` -> `short` -> `byte`


Narrowing casting must be done manually by placing the type in parentheses in front of the value:

```java
double myDouble = 9.78d;
int myInt = (int) myDouble; // Manual casting: double to int
```


---


# Java Operators


Operators are used to perform operations on variables and values.

Java divides the operators into the following groups:

-   Arithmetic operators
-   Assignment operators
-   Comparison operators
-   Logical operators
-   Bitwise operators



## Arithmetic Operators


Arithmetic operators are used to perform common mathematical operations.

![[Pasted image 20221029095227.png]]



## Java Assignment Operators


Assignment operators are used to assign values to variables.

```java
int x = 10;
```


**A list of all assignment operators:**

![[Pasted image 20221029095446.png]]



## Java Comparison Operators


Comparison operators are used to compare two values. The return value of a comparison is either `true` or `false`.

```java
int x = 5;
int y = 3;
System.out.println(x > y); // returns true, because 5 is higher than 3
```


**A list of all Comparison operators:**

![[Pasted image 20221029095633.png]]



## Java Logical Operators


Logical operators are used to check whether an expression is `true` or `false`. They are used in decision making.

![[Pasted image 20221030124533.png]]


---


# Control structures

**Control structures are programming blocks that can change the path we take through those instructions.**



## Conditional statements

**Java has the following conditional statements:**

-   Use `if` to specify a block of code to be executed, if a specified condition is true
-   Use `else` to specify a block of code to be executed, if the same condition is false
-   Use `else if` to specify a new condition to test, if the first condition is false
-   Use `switch` to specify many alternative blocks of code to be executed


 
### Ternary operator

There is also a short-hand if else, which is known as the **ternary operator** because it consists of three operands.

It can be used to replace multiple lines of code with a single line, and is most often used to replace simple if else statements:

**Syntax**
```java
variable = (condition) ? expressionTrue :  expressionFalse;
```



## Java Loops

Loops that are used to **iterate through multiple values/objects and repeatedly run specific code blocks.** The basic loop types in Java are _for_, _while_ and _do while_.

Loops can execute a block of code as long as a specified condition is reached.

Loops are handy because they save time, reduce errors, and they make code more readable.



### Java While Loop

The `while` loop loops through a block of code as long as a specified condition is `true`:

```java
int i = 0;

while (i < 5) {
  System.out.println(i);
  i++;
}

//Output: 0 1 2 3 4
```



### The Do/While Loop

The `do/while` loop is a variant of the `while` loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

```java
int i = 0;

do {
  System.out.println(i);
  i++;
} while (i < 5);

//Output: 0 1 2 3 4
```
**Do not forget to increase the variable used in the condition, otherwise the loop will never end!**



### Java For Loop

When you know exactly how many times you want to loop through a block of code, use the `for` loop instead of a `while` loop:

```java
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```


**Statement 1** is executed (one time) before the execution of the code block.

**Statement 2** defines the condition for executing the code block.

**Statement 3** is executed (every time) after the code block has been executed.


**Example**
```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}

//Output: 0 1 2 3 4
```



### Java for-each Loop

In Java, the for-each loop is used to iterate through elements of arrays and collections (like ArrayList). 


**Syntax**
``` java
for (dataType item : array) {
// code block to be executed
}
```


**Example**
```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String i : cars) {
  System.out.println(i);
}

// Output: Volvo BMW Ford Mazda
```



### Java Break and Continue

While working with loops, it is sometimes desirable to skip some statements inside the loop or terminate the loop immediately without checking the test expression.

In such cases, break and continue statements are used



####  Break

The break statement in Java terminates the loop immediately, and the control of the program moves to the next statement following the loop.

It is almost always used with decision-making statements (Java if...else Statement).

``` java 
break;
```



#### Java continue

The `continue` statement skips the current iteration of a loop (`for`, `while`, `do...while`, etc).

After the `continue` statement, the program moves to the end of the loop. And, test expression is evaluated (update statement is evaluated in case of the for loop).

``` java
continue;
```


---




**Object** − Objects have states and behaviors. Example: A dog has states - color, name, breed as well as behavior such as wagging their tail, barking, eating. An object is an instance of a class.

**Class** − A class can be defined as a template/blueprint that describes the behavior/state that the object of its type supports.

**Methods** − A method is basically a behavior. A class can contain many methods. It is in methods where the logics are written, data is manipulated and all the actions are executed.

**Instance Variables** − Each object has its unique set of instance variables. An object's state is created by the values assigned to these instance variables.