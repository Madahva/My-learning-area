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

The first part of a JSX tag determines the type of the React element.

When an element type starts with a lowercase letter, it refers to a built-in component like `<div>` or `<span>` and results in a string `'div'` or `'span'` passed to `React.createElement`. 

Capitalized types indicate that the JSX tag is referring to a React component

Types that start with a capital letter like `<Foo />` compile to `React.createElement(Foo)`and correspond to a component defined or imported in your JavaScript file.


## React Components

React components are JavaScript functions.

React components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

A **component** should ideally **only do one thing**. If it ends up growing, it should be decomposed into smaller **subcomponents**.



## Props
You can pass any JavaScript expression as a prop, by surrounding it with `{}`.

You can pass a string literal as a prop.

If you already have `props` as an object, and you want to pass it in JSX, you can use `...` as a “spread” syntax to pass the whole props object

``` jsx
  const props = {firstName: 'Buddy', lastName: 'Bear'};
  return <Greeting {...props} />;
```


## Children in JSX

In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed as a special prop: `props.children`. There are several different ways to pass children.

You can provide more JSX elements as the children. This is useful for displaying nested components.

---

## Create React Application

Facebook has created a **Create React Application** with everything you need to build a React app.

It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files.

The Create React App uses ESLint to test and warn about mistakes in the code.

To create a Create React App run the following code on your terminal:


	npx create-react-app some-name-here


Make sure you have Node.js 5.2 or higher. Otherwise you must install npx.


---

_props_ are a way of passing data from parent to child