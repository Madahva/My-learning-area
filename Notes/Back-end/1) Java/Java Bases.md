

## What is Java?

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


## Java Syntax

When we consider a Java program, it can be defined as a collection of objects that communicate via invoking each other's methods.

About Java programs, it is very important to keep in mind the following points.

-   **Case Sensitivity** − Java is case sensitive, which means identifier **Hello** and **hello** would have different meaning in Java.

-   **Class Names** − For all class names the first letter should be in Upper Case. If several words are used to form a name of the class, each inner word's first letter should be in Upper Case.
   
-   **Method Names** − All method names should start with a Lower Case letter. If several words are used to form the name of the method, then each inner word's first letter should be in Upper Case.   
   
-   **Program File Name** − Name of the program file should exactly match the class name.

-   **public static void main(String args[])** − Java program processing starts from the main() method which is a mandatory part of every Java program.



### The main Method

The `main()` method is required and you will see it in every Java program:

```java
public static void main(String[] args)
```

Any code inside the `main()` method will be executed.


### Comments in Java

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


### Java Identifiers

All Java components require names. Names used for classes, variables, and methods are called **identifiers**.


### Java Modifiers

Like other languages, it is possible to modify classes, methods, etc., by using modifiers. There are two categories of modifiers:

-   **Access Modifiers** − default, public , protected, private

-   **Non-access Modifiers** − final, abstract, strictfp


## Java Variables

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


### Identifiers

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


**A demonstration of how to declare variables of other types:**
```java
int myNum = 5;
float myFloatNum = 5.99f;
char myLetter = 'D';
boolean myBool = true;
String myText = "Hello";
```



### Declare Many Variables

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



### Final Variables

If you don't want others (or yourself) to overwrite existing values, use the `final` keyword (this will declare the variable as "final" or "constant", which means unchangeable and read-only):

**Example**
```java
final int myNum = 15;
myNum = 20;  // will generate an error: cannot assign a value to a final variable
```





### Java Arrays

Arrays are objects that store multiple variables of the same type. However, an array itself is an object on the heap. We will look into how to declare, construct, and initialize in the upcoming chapters.









**Object** − Objects have states and behaviors. Example: A dog has states - color, name, breed as well as behavior such as wagging their tail, barking, eating. An object is an instance of a class.

**Class** − A class can be defined as a template/blueprint that describes the behavior/state that the object of its type supports.

**Methods** − A method is basically a behavior. A class can contain many methods. It is in methods where the logics are written, data is manipulated and all the actions are executed.

**Instance Variables** − Each object has its unique set of instance variables. An object's state is created by the values assigned to these instance variables.