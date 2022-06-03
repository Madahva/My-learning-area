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

---

## React Components

React lets you define components as classes or functions.

React components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

React components are reusable pieces of code that return a React element to be rendered to the page. Component names should always start with a capital letter. 

The simplest version of React component is a plain JavaScript function that returns a React element:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

A **component** should ideally **only do one thing**. If it ends up growing, it should be decomposed into smaller **subcomponents**.

---

## Elements

React elements are the building blocks of React applications. One might confuse elements with a more widely known concept of “components”. An element describes what you want to see on the screen. React elements are immutable.

```jsx
const element = <h1>Hello, world</h1>;
```

Typically, elements are not used directly, but get returned from components.

---

## Props

_Props_ are a way of passing data from parent to child.

`props` are inputs to a React component. They are data passed down from a parent component to a child component.

You can pass any JavaScript expression as a prop, by surrounding it with `{}`.

You can pass a string literal as a prop.

If you already have `props` as an object, and you want to pass it in JSX, you can use `...` as a “spread” syntax to pass the whole props object

``` jsx
  const props = {firstName: 'Buddy', lastName: 'Bear'};
  return <Greeting {...props} />;
```

---

## Children

`props.children` is available on every component. It contains the content between the opening and closing tags of a component. For example:

```jsx
<Welcome>Hello world!</Welcome>
```

The string `Hello world!` is available in `props.children` in the `Welcome` component:

```jsx
function Welcome(props) {
  return <p>{props.children}</p>;
}
```

You can provide more JSX elements as the children. This is useful for displaying nested components.

---

## DOM Elements

React implements a browser-independent DOM system for performance and cross-browser compatibility. 


### Properties and attributes

In React, all DOM properties and attributes (including event handlers) should be camelCased. For example, the HTML attribute `tabindex` corresponds to the attribute `tabIndex` in React.

There are a number of attributes that work differently between React and HTML:

`class` == `className`
`for` == `htmlFor`
`value` == `defaultValue`
`checked` == `defaultChecked`
`dangerouslySetInnerHTML` == `innerHTML`

The `style` attribute accepts a JavaScript object with camelCased properties rather than a CSS string.

Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes from JS.

You may also use **custom attributes** as long as they’re fully **lowercase**.


### Events

Handling events with React elements has some syntactic differences:

-   React event handlers are named using camelCase, rather than lowercase.
-   With JSX you pass a function as the event handler, rather than a string.

React normalizes events so that they have consistent properties across different browsers.

-   [Clipboard Events](https://reactjs.org/docs/events.html#clipboard-events)
-   [Composition Events](https://reactjs.org/docs/events.html#composition-events)
-   [Keyboard Events](https://reactjs.org/docs/events.html#keyboard-events)
-   [Focus Events](https://reactjs.org/docs/events.html#focus-events)
-   [Form Events](https://reactjs.org/docs/events.html#form-events)
-   [Generic Events](https://reactjs.org/docs/events.html#generic-events)
-   [Mouse Events](https://reactjs.org/docs/events.html#mouse-events)
-   [Pointer Events](https://reactjs.org/docs/events.html#pointer-events)
-   [Selection Events](https://reactjs.org/docs/events.html#selection-events)
-   [Touch Events](https://reactjs.org/docs/events.html#touch-events)
-   [UI Events](https://reactjs.org/docs/events.html#ui-events)
-   [Wheel Events](https://reactjs.org/docs/events.html#wheel-events)
-   [Media Events](https://reactjs.org/docs/events.html#media-events)
-   [Image Events](https://reactjs.org/docs/events.html#image-events)
-   [Animation Events](https://reactjs.org/docs/events.html#animation-events)
-   [Transition Events](https://reactjs.org/docs/events.html#transition-events)
-   [Other Events](https://reactjs.org/docs/events.html#other-events)

---

## Create React Application

Facebook has created a **Create React Application** with everything you need to build a React app.

It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files.

The Create React App uses ESLint to test and warn about mistakes in the code.

To create a Create React App run the following code on your terminal:


	npx create-react-app some-name-here


Make sure you have Node.js 5.2 or higher. Otherwise you must install npx.


---

## Single-page Application

A single-page application is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run. Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.

---

## Package Managers

Package managers are tools that allow you to manage dependencies in your project. [npm](https://www.npmjs.com/) and [Yarn](https://yarnpkg.com/) are two package managers commonly used in React applications.