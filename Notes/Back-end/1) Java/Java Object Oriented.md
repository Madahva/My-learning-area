


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




## Inheritance

In Java, classes can be derived from classes. Basically, if you need to create a new class and here is already a class that has some of the code you require, then it is possible to derive your new class from the already existing code.

This concept allows you to reuse the fields and methods of the existing class without having to rewrite the code in a new class. In this scenario, the existing class is called the **superclass** and the derived class is called the **subclass**.


## Interfaces

In Java language, an interface can be defined as a contract between objects on how to communicate with each other. Interfaces play a vital role when it comes to the concept of inheritance.

An interface defines the methods, a deriving class (subclass) should use. But the implementation of the methods is totally up to the subclass.




**Object** − Objects have states and behaviors. Example: A dog has states - color, name, breed as well as behavior such as wagging their tail, barking, eating. An object is an instance of a class.

**Class** − A class can be defined as a template/blueprint that describes the behavior/state that the object of its type supports.

**Instance Variables** − Each object has its unique set of instance variables. An object's state is created by the values assigned to these instance variables.