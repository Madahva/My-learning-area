


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



## Interfaces

In Java language, an interface can be defined as a contract between objects on how to communicate with each other. Interfaces play a vital role when it comes to the concept of inheritance.

An interface defines the methods, a deriving class (subclass) should use. But the implementation of the methods is totally up to the subclass.



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
**Object** − Objects have states and behaviors. Example: A dog has states - color, name, breed as well as behavior such as wagging their tail, barking, eating. An object is an instance of a class.

**Class** − A class can be defined as a template/blueprint that describes the behavior/state that the object of its type supports.

**Instance Variables** − Each object has its unique set of instance variables. An object's state is created by the values assigned to these instance variables.