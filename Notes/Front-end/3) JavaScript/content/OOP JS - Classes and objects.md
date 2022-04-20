##   OOP

Object-oriented programming is about modeling a system as a collection of objects, which each represent some particular aspect of the system. Objects contain both functions (or methods) and data.

### Classes and instances

You can declare a class using the class keyword.

### Inheritance

We use the extends keyword to say that this class inherits from another class.
### polymorphism

polymorphism is when a method has the same name, but a different implementation in different classes - is called polymorphism. When a method in a subclass replaces the implementation of the version in the superclass, we say that the subclass overrides the version in the superclass.
### encapsulation

Private data properties and methods must be declared in the class declaration, and their names start with #, and they can only be called by the object's own methods.


## Object

In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property. The key of a property can be a string. And the value of a property can be any value.

Functions that are part of objects are called methods.


**initialize an object**
Objects can be initialized using new Object(), Object.create(), or using the literal notation (initializer notation). An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).

**Notation**
Dot notation = it can only accept a literal member name, not a variable value pointing to a name.
Bracket notation

**Constructor**
A constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.

constructors in JavaScript provide us with something like a class definition, enabling us to define the "shape" of an object, including any methods it contains, in a single place.

**Prototype**
Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

**Object.create**
The Object.create() method creates a new object and allows you to specify an object that will be used as the new object's prototype.

**This** 
The this keyword refers to the current object the code is being written inside

