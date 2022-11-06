

# Java ArrayList

The `ArrayList` class is a resizable __array__, which can be found in the `java.util` package.

The difference between a built-in array and an `ArrayList` in Java, is that the size of an array cannot be modified (if you want to add or remove elements to/from an array, you have to create a new one). While elements can be added and removed from an `ArrayList` whenever you want. The syntax is also slightly different:


**Example**
```java
import java.util.ArrayList; // import the ArrayList class

ArrayList<String> cars = new ArrayList<String>(); // Create an ArrayList object
```



## Add Items


The `ArrayList` class has many useful methods. For example, to add elements to the `ArrayList`, use the `add()` method:


```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    System.out.println(cars);
  }
}
```


To access an element in the `ArrayList`, use the `get()` method and refer to the index number:

```java
cars.get(0);
```



## Change an Item


To modify an element, use the `set()` method and refer to the index number:

```java
cars.set(0, "Opel");
```



## Remove an Item


To remove an element, use the `remove()` method and refer to the index number:

```java
cars.remove(0);
``` 

To remove all the elements in the `ArrayList`, use the `clear()` method:

```java
cars.clear();
```



## ArrayList Size


To find out how many elements an ArrayList have, use the `size` method:

```java
cars.size();
```



## Loop Through an ArrayList


Loop through the elements of an `ArrayList` with a `for` loop, and use the `size()` method to specify how many times the loop should run:

```java
public class Main {
  public static void main(String[] args) {
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    for (int i = 0; i < cars.size(); i++) {
      System.out.println(cars.get(i));
    }
  }
}
```


You can also loop through an `ArrayList` with the **for-each** loop.



## Other Types


Elements in an ArrayList are actually objects. In the examples above, we created elements (objects) of type "String". Remember that a String in Java is an object (not a primitive type). To use other types, such as int, you must specify an equivalent wrapper class: `Integer`. For other primitive types, use: `Boolean` for boolean, `Character` for char, `Double` for double, etc.



## Sort an ArrayList


Another useful class in the `java.util` package is the `Collections` class, which include the `sort()` method for sorting lists alphabetically or numerically.



## How the ArrayList works


The `ArrayList` class has a regular array inside it. When an element is added, it is placed into the array. If the array is not big enough, a new, larger array is created to replace the old one and the old one is removed.



---



# LinkedList

The `LinkedList` class is a collection which can contain many objects of the same type, just like the `ArrayList`.

The `LinkedList` class has all of the same methods as the `ArrayList` class because they both implement the `List` interface. This means that you can add items, change items, remove items and clear the list in the same way.

However, while the `ArrayList` class and the `LinkedList` class can be used in the same way, they are built very differently.



### How the LinkedList works


The `LinkedList` stores its items in "containers." The list has a link to the first container and each container has a link to the next container in the list. To add an element to the list, the element is placed into a new container and that container is linked to one of the other containers in the list.



Use an `ArrayList` for storing and accessing data, and `LinkedList` to manipulate data.


## LinkedList Methods


For many cases, the `ArrayList` is more efficient as it is common to need access to random items in the list, but the `LinkedList` provides several methods to do certain operations more efficiently.


You can see the methods here: https://docs.oracle.com/javase/7/docs/api/java/util/LinkedList.html



---



# Java HashMap


A `HashMap` store items in "**key**/**value**" pairs, and you can access them by an index of another type. 


```java
HashMap<String, String> capitalCities = new HashMap<String, String>();
```



## Add Items


The `HashMap` class has many useful methods. For example, to add items to it, use the `put()` method.



## Access an Item


To access a value in the `HashMap`, use the `get()` method and refer to its key.



## Remove an Item


To remove an item, use the `remove()` method and refer to the key:



---



# Java Wrapper Classes


Wrapper classes provide a way to use primitive data types (`int`, `boolean`, etc..) as objects.

Sometimes you must use wrapper classes, for example when working with Collection objects, such as `ArrayList`, where primitive types cannot be used (the list can only store objects).


To create a wrapper object, use the wrapper class instead of the primitive type. To get the value, you can just print the object:


```java
public class Main {
  public static void main(String[] args) {
    Integer myInt = 5;
    Double myDouble = 5.99;
    Character myChar = 'A';
    System.out.println(myInt);
    System.out.println(myDouble);
    System.out.println(myChar);
  }
}
```


Since you're now working with objects, you can use certain methods to get information about the specific object.

For example, the following methods are used to get the value associated with the corresponding wrapper object: `intValue()`, `byteValue()`, `shortValue()`, `longValue()`, `floatValue()`, `doubleValue()`, `charValue()`, `booleanValue()`.



---



# Java Exceptions

When executing Java code, different errors can occur: coding errors made by the programmer, errors due to wrong input, or other unforeseeable things.

When an error occurs, Java will normally stop and generate an error message. The technical term for this is: Java will throw an **exception** (throw an error).



## Java try and catch

The `try` statement allows you to define a block of code to be tested for errors while it is being executed.

The `catch` statement allows you to define a block of code to be executed, if an error occurs in the try block.


The `try` and `catch` keywords come in pairs:

```java
try {
  //  Block of code to try
}
catch(Exception e) {
  //  Block of code to handle errors
}
```


The `finally` statement lets you execute code, after `try...catch`, regardless of the result:

```java
try {
	int[] myNumbers = {1, 2, 3};
    System.out.println(myNumbers[10]);
} catch (Exception e) {
    System.out.println("Something went wrong.");
} finally {
    System.out.println("The 'try catch' is finished.");
}
```



## The throw keyword


The `throw` statement allows you to create a custom error.

The `throw` statement is used together with an **exception type**. There are many exception types available in Java: `ArithmeticException`, `FileNotFoundException`, `ArrayIndexOutOfBoundsException`, `SecurityException`, etc:


```java
public class Main {
  static void checkAge(int age) {
    if (age < 18) {
      throw new ArithmeticException("Access denied - You must be at least 18 years old.");
    }
    else {
      System.out.println("Access granted - You are old enough!");
    }
  }

  public static void main(String[] args) {
    checkAge(15); // Set age to 15 (which is below 18...)
  }
}
```