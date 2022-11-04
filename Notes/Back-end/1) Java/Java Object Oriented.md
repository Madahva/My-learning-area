


# Java - What is OOP?


OOP stands for **Object-Oriented Programming**.

Procedural programming is about writing procedures or methods that perform operations on the data, while object-oriented programming is about creating objects that contain both data and methods.

Object-oriented programming has several advantages over procedural programming:

-   OOP is faster and easier to execute
-   OOP provides a clear structure for the programs
-   OOP helps to keep the Java code DRY "Don't Repeat Yourself", and makes the code easier to maintain, modify and debug
-   OOP makes it possible to create full reusable applications with less code and shorter development time

**Tip:** The "Don't Repeat Yourself" (DRY) principle is about reducing the repetition of code. You should extract out the codes that are common for the application, and place them at a single place and reuse them instead of repeating it.



---



# Java Classes and Objects


**Classes and objects are the two main aspects of object-oriented programming.**

A class is a template for objects, and an object is an instance of a class.

When the individual objects are created, they inherit all the variables and methods from the class.



## Create a Class


To create a class, use the keyword `class`:

```java
public class Main {
  int x = 5;
}
```


**Note:** A class should always start with an uppercase first letter, and the name of the java file should match the class name.



## Create an Object

In Java, an object is created from a class.

You can create multiple objects of one class.

If you create multiple objects of one class, you can change the attribute values in one object, without affecting the attribute values in the other.



## Java Class Attributes


**Class attributes are variables within a class**


```java
public class Main {
  int x = 5;
  int y = 3;
}
```



### Accessing Attributes


You can access attributes by creating an object of the class, and by using the dot syntax (`.`):



## Java Class Methods


To call a method, write the method's name followed by two parentheses **()** and a semicolon **;**



## Java Constructors


A constructor in Java is a **special method** that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for object attributes.



**Constructors can also take parameters, which is used to initialize attributes.**



## Java Inner Classes


In Java, it is also possible to nest classes (a class within a class). The purpose of nested classes is to group classes that belong together, which makes your code more readable and maintainable.

To access the inner class, create an object of the outer class, and then create an object of the inner class.



## Encapsulation


The meaning of **Encapsulation**, is to make sure that "sensitive" data is hidden from users. To achieve this, you must:

-   declare class variables/attributes as `private`
-   provide public **get** and **set** methods to access and update the value of a `private` variable


`private` variables can only be accessed within the same class (an outside class has no access to it). However, it is possible to access them if we provide public **get** and **set** methods.

The `get` method returns the variable value, and the `set` method sets the value.

Syntax for both is that they start with either `get` or `set`, followed by the name of the variable, with the first letter in upper case:



```java
public class Person {
  private String name; // private = restricted access

  // Getter
  public String getName() {
    return name;
  }

  // Setter
  public void setName(String newName) {
    this.name = newName;
  }
}
```



**Why Encapsulation?**


-   Better control of class attributes and methods
-   Class attributes can be made **read-only** (if you only use the `get` method), or **write-only** (if you only use the `set` method)
-   Flexible: the programmer can change one part of the code without affecting other parts
-   Increased security of data



## Inheritance

In Java, classes can be derived from classes. Basically, if you need to create a new class and here is already a class that has some of the code you require, then it is possible to derive your new class from the already existing code.

This concept allows you to reuse the fields and methods of the existing class without having to rewrite the code in a new class. In this scenario, the existing class is called the **superclass** and the derived class is called the **subclass**.


To inherit from a class, use the `extends` keyword.



## Java Polymorphism



Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance.

**It is useful for code reusability:** reuse attributes and methods of an existing class when you create a new class.



---



# Java Modifiers


We divide modifiers into two groups:

-   **Access Modifiers** - controls the access level
-   **Non-Access Modifiers** - do not control access level, but provides other functionality



## Access Modifiers


In Java, access modifiers are used to set the accessibility (visibility) of classes, interfaces, variables, methods, constructors, data members, and the setter methods.


**There are four access modifiers keywords in Java and they are:**


- **Default**: declarations are visible only within the package (package private)

- **Private** declarations are visible within the class only

- **Protected** declarations are visible within the package or all subclasses

- **Public** declarations are visible everywhere



## Non-Access modifiers 


Non-access modifiers provide information about the characteristics of a class, method, or variable to the JVM. 

**There are a total of 7 non-access modifiers introduced.**


**Static**

Attributes and methods belongs to the class, rather than an object.

The use of a static modifier makes the program more efficient by saving memory. A static field exists across all the class instances, and without creating an object of the class, they can be called.



**Final**

Attributes and methods cannot be overridden/modified. 

The class cannot be inherited by other classes.



**Abstract**

The class cannot be used to create objects (To access an abstract class, it must be inherited from another class). 

Can only be used in an abstract class, and can only be used on methods. The method does not have a body. The body is provided by the subclass (inherited from).



**Synchronized**.

The synchronized keyword prevents a block of code from executing by multiple threads at once. It is very important for some critical operations.



**Transient**

The transient keyword may be applied to member variables of a class to indicate that the member variable should not be serialized when the containing class instance is serialized. Serialization is the process of converting an object into a byte stream. When we do not want to serialize the value of a variable, then we declare it as transient.



**Volatile**

The volatile keyword is used to make the class thread-safe. That means if a variable is declared as volatile, then that can be modified by multiple threads at the same time without any issues. The volatile keyword is only applicable to a variable. A volatile keyword reduces the chance of memory inconsistency. The value of a volatile variable is always read from the main memory and not from the local thread cache, and it helps to improve thread performance.



**native**

The native keyword may be applied to a method to indicate that the method is implemented in a language other than Java. Using this java application can call code written in C, C++, or assembler language. A shared code library or DLL is required in this case.



---



# Interfaces


In Java language, an interface can be defined as a contract between objects on how to communicate with each other. Interfaces play a vital role when it comes to the concept of inheritance.

An interface defines the methods, a deriving class (subclass) should use. But the implementation of the methods is totally up to the subclass.

An `interface` is a completely "**abstract class**" that is used to group related methods with empty bodies.

To access the interface methods, the interface must be "implemented" (kinda like inherited) by another class with the `implements` keyword (instead of `extends`). The body of the interface method is provided by the "implement" class.



**Why And When To Use Interfaces?**

1) To achieve security - hide certain details and only show the important details of an object (interface).

2) Java does not support "multiple inheritance" (a class can only inherit from one superclass). However, it can be achieved with interfaces, because the class can **implement** multiple interfaces. **Note:** To implement multiple interfaces, separate them with a comma.



---




# Enums


An `enum` is a special "class" that represents a group of **constants** (unchangeable variables, like `final` variables).

To create an `enum`, use the `enum` keyword (instead of class or interface), and separate the constants with a comma. Note that they should be in uppercase letters.


**Example**
```java
enum Level {
  LOW,
  MEDIUM,
  HIGH
}
```


You can access `enum` constants with the **dot** syntax:

```java
Level myVar = Level.MEDIUM;
```


**Enum** is short for "enumerations", which means "specifically listed".



#### Difference between Enums and Classes


An `enum` can, just like a `class`, have attributes and methods. The only difference is that enum constants are `public`, `static` and `final` (unchangeable - cannot be overridden).

An `enum` cannot be used to create objects, and it cannot extend other classes (but it can implement interfaces).



#### Why And When To Use Enums?


Use enums when you have values that you know aren't going to change, like month days, days, colors, deck of cards, etc.



---



# Java Packages & API


A package in Java is used to group related classes. Think of it as **a folder in a file directory**. We use packages to avoid name conflicts, and to write a better maintainable code. Packages are divided into two categories:

-   Built-in Packages (packages from the Java API)
-   User-defined Packages (create your own packages)



## Built-in Packages


The Java API is a library of prewritten classes, that are free to use, included in the Java Development Environment.

The library contains components for managing input, database programming, and much much more. The complete list can be found at Oracles website: [https://docs.oracle.com/javase/8/docs/api/](https://docs.oracle.com/javase/8/docs/api/).

The library is divided into **packages** and **classes**. Meaning you can either import a single class (along with its methods and attributes), or a whole package that contain all the classes that belong to the specified package.

To use a class or a package from the library, you need to use the `import` keyword:


```java
import package.name.Class;   // Import a single class
import package.name.*;   // Import the whole package
```



---


