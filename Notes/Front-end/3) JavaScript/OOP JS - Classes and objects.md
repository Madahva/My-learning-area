# OOP

Object-oriented programming is about modeling a system as a collection of objects, which each represent some particular aspect of the system. Objects contain both functions (or methods) and data.


## Classes and instances

You can declare a class using the class keyword.


### Inheritance

We use the extends keyword to say that this class inherits from another class.


### polymorphism

polymorphism is when a method has the same name, but a different implementation in different classes - is called polymorphism. When a method in a subclass replaces the implementation of the version in the superclass, we say that the subclass overrides the version in the superclass.


### encapsulation

Private data properties and methods must be declared in the class declaration, and their names start with #, and they can only be called by the object's own methods.

---

## Objects

An object is a collection of properties, and a property is an association between a name (or _key_) and a value. 

**Keys** are strings (or Symbols), and _values_ can be anything.

A property's value can be a function, in which case the property is known as a method.


### Initialize an object

Objexts can be created: 

- Using new Object().
```js
const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
```

- Using object.create().

- Using the literal notation (initializer notation). 
```js
const myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};
```
 
An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).


### properties

In JavaScript, objects can be seen as a collection of properties. 

With the **object literal syntax**, a limited set of properties are initialized; then properties can be added and removed. 

Property values can be values of any type, including other objects, which enables building complex data structures. 

Properties are identified using _key_ values. A _key_ value is either a _String value_ or a _Symbol value_.

There are two types of object properties: The **data property** and the **accessor property**.


#### Data property

Associates a key with a value, and has the following attributes:


#### Accessor property

Associates a key with one of two accessor functions (`get` and `set`) to retrieve or store a value.


### Notation

You access the properties of an object with a simple dot-notation:

``` js
objectName.propertyName
```

It can only accept a literal member name, not a variable value pointing to a name.


#### Bracket notation
  
Bracket notation **gives us the ability to use variables to access values in an object**. This is especially helpful with the value of the variable changes.

```js
object['property']
```


### Enumerate the properties of an object

There are three native ways to list/traverse object properties:

-   [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops. This method traverses all enumerable properties of an object and its prototype chain.
-   [`Object.keys(o)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys). This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object `o`.
-   [`Object.getOwnPropertyNames(o)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames). This method returns an array containing all own properties' names (enumerable or not) of an object `o`.


### Constructor

A constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.

constructors in JavaScript provide us with something like a class definition, enabling us to define the "shape" of an object, including any methods it contains, in a single place.


### Methods

A _method_ is a function associated with an object, or, put differently, a method is a property of an object that is a function. Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object.

### Prototype

All objects in JavaScript inherit from at least one other object. The object being inherited from is known as the prototype, and the inherited properties can be found in the `prototype` object of the constructor.

The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.


#### Object.create
The Object.create() method creates a new object and allows you to specify an object that will be used as the new object's prototype.


### This 

The this keyword refers to the current object the code is being written inside



### Getters and Setters

A [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) is a method that gets the value of a specific property. 

A [setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) is a method that sets the value of a specific property. 

You can define getters and setters on any predefined core object or user-defined object that supports the addition of new properties.

Getters and setters can be either

-   defined using [object initializers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#object_initializers), or
-   added later to any object at any time using a getter or setter adding method.


### Deleting properties

You can remove a non-inherited property by using the [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator.

```js
delete myobj.propertie;
```


---

### Closures

A **closure** is the combination of a function bundled together (enclosed) with **references** to its surrounding state (the **lexical environment**)

A closure gives you access to an outer function's scope from an inner function.

In JavaScript, closures are created every time a function is created, at function creation time.

Using closures provides benefits that are normally associated with object-oriented programming. In particular, _data hiding_ and _encapsulation_.


Example 1:

```js
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.
```


Example 2:

```js
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

```

```html
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
```

