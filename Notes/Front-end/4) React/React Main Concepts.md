# React Bases

## What is React?

**React is the premier way to build big, fast Web apps with JavaScript.**

React, sometimes referred to as a frontend JavaScript framework, is a JavaScript **library** created by **Facebook**.

- React is a **User Interface** (UI) library.
- React is a tool for building **UI components**.

React uses **Babel** to convert **JSX** into JavaScript.

**Babel** is a JavaScript compiler that can translate markup or programming languages into JavaScript.




### React creates a VIRTUAL DOM in memory.

Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

React finds out what changes have been made, and changes **only** what needs to be changed.

---

As you start to build large libraries of components, you’ll appreciate the explicitness and modularity, and with code reuse, your lines of code will start to shrink.


## What is JSX?

**JSX** stands for **J**ava**S**cript **X**ML.

JSX is an HTML like extension to JavaScript.

Just like HTML, JSX tags can have a tag names, attributes, and children. If an attribute is wrapped in curly braces, the value is a JavaScript expression.


## React Components

React components are JavaScript functions.

A **component** should ideally **only do one thing**. If it ends up growing, it should be decomposed into smaller **subcomponents**.

## Create React Application

Facebook has created a **Create React Application** with everything you need to build a React app.

It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files.

The Create React App uses ESLint to test and warn about mistakes in the code.

To create a Create React App run the following code on your terminal:


	npx create-react-app some-name-here


Make sure you have Node.js 5.2 or higher. Otherwise you must install npx.


---

_props_ are a way of passing data from parent to child