# React Bases


## What is React?

**React is the premier way to build big, fast Web apps with JavaScript.**

React, sometimes referred to as a frontend JavaScript framework, is a JavaScript **library** created by **Facebook**.

- React is a **User Interface** (UI) library.
- React is a tool for building **UI components**.

React uses **Babel** to convert **JSX** into JavaScript.

**Babel** is a JavaScript compiler that can translate markup or programming languages into JavaScript.


### The Root Node

The root node is the HTML element where you want to display the result.

It is like a _container_ for content managed by React.


### React creates a VIRTUAL DOM in memory.

Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

React finds out what changes have been made, and changes **only** what needs to be changed.

---

As you start to build large libraries of components, you’ll appreciate the explicitness and modularity, and with code reuse, your lines of code will start to shrink.


## What is JSX?

**JSX** stands for **J**ava**S**cript **X**ML.

JSX extends JavaScript's syntax so that HTML-like code can live alongside it.

JSX is an HTML like extension to JavaScript.

JSX makes it easier to write and add HTML in React.


```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```


### Expressions in JSX

Just like HTML, JSX tags can have a tag names, attributes, and children. If an attribute is wrapped in curly braces, the value is a JavaScript expression.

The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result.


```jsx
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
```


Some JSX attributes are different than HTML attributes so that they don't conflict with JavaScript reserved words. For example, `class` in HTML translates to `className` in JSX. Note that multi-word attributes are camel-cased.


**The first part of a JSX tag determines the type of the React element:**

- When an element type starts with a lowercase letter, it refers to a built-in component like `<div>` or `<span>`.
- Capitalized types indicate that the JSX tag is referring to a React component.


### Comments in JSX


```jsx
<div>
  {/* Comment goes here */}
  Hello, {name}!
</div>
```


```jsx
<div>
  {/* It also works 
  for multi-line comments. */}
  Hello, {name}! 
</div>
```


---

## React Components

React components let you split the _UI_ into independent, _reusable_ pieces, and think about each piece in isolation.

React components are pieces of code that return a React element to be rendered to the page. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

React lets you define components as _classes_ or _functions_. 


A **component** should ideally **only do one thing**. If it ends up growing, it should be decomposed into smaller **sub-components**.

The `App` component returns a JSX expression. This expression defines what your browser ultimately renders to the DOM.


### Create a React Component

- When creating a React component, the component's name _MUST_ start with an upper case letter.

- Since React is all about re-using code, it is recommended to split your components into separate files.


```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Tittle from './components/Tittle.jsx';

function App() {
  return (
    <div className="App">
      <Tittle />
    </div>
  );
}

export default App;
```


**The react component files consists of three main parts:** 

Some `import` statements at the top, the `component function` in the middle, and an `export` statement at the bottom.

- Components can import modules they need and must export themselves at the bottom of their files.
- Component functions are named with `PascalCase`.


#### Import statements

The `import` statements at the top of the file allow a component to use code that has been defined elsewhere. 


#### Export statements

At the very bottom of the component file, the statement `export default` makes our component available to other modules.


### You can conditionally render components

**There are several ways to do this.**

- You can use the `if` JavaScript operator to decide which component to render.
- You can conditionally render a React component by using the `&&` operator.
- Using a ternary operator.

---

## Elements

React elements are the building blocks of React applications. One might confuse elements with a more widely known concept of “components”. An element describes what you want to see on the screen. React elements are immutable.

```jsx
const element = <h1>Hello, world</h1>;
```

Typically, elements are not used directly, but get returned from components.

---

## Props

**_Props_ are a way of passing data from parent to child.**

- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.
- `props` stands for properties.


`props` are inputs to a React component. They are data passed down from a parent component to a child component. **In order to propagate information in the opposite direction**, we can use _callback functions_, also passed down as props.

- It's not possible to update the props a component receives; only to read them.
  
- The component receives the argument as a `props` object.

- You can pass any JavaScript expression as a prop, by surrounding it with `{}`.

- You can pass a string literal as a prop.


#### Add a props to a element:
```jsx
const myElement = <Car brand="Ford" />;
```

#### Use the props in a component:
```jsx
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
```


If you already have `props` as an object, and you want to pass it in JSX, you can use `...` as a “spread” syntax to pass the whole props object


``` jsx
  const props = {firstName: 'Buddy', lastName: 'Bear'};
  return <Greeting {...props} />;
```


**Props are like function arguments, and you send them into the component as attributes.**

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


### React Events

Just like HTML DOM events, React can perform actions based on user events.


**Handling events with React elements has some syntactic differences:**

-   React event handlers are named using camelCase, rather than lowercase.
-   With JSX you pass a function as the event handler, rather than a string.
- To pass an argument to an event handler, use an arrow function.


```jsx
function AlertBtn() {
  const showAlert = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => showAlert("HI")}>Display an alert</button>
  );
}
```


**There are a wide variety of events in React:**

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

## Hooks

A Hook is a special function that lets you “hook into” React features. Their names always start with `use`.

React provides a few built-in Hooks like `useState`. You can also create your own Hooks to reuse stateful behavior between different components.

_Hooks_ are a new addition in React 16.8. They let you use state and other React features without writing a class.


-   [Basic Hooks](https://reactjs.org/docs/hooks-reference.html#basic-hooks)
    
    -   [`useState`](https://reactjs.org/docs/hooks-reference.html#usestate)
    -   [`useEffect`](https://reactjs.org/docs/hooks-reference.html#useeffect)
    -   [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext)
     
      
-   [Additional Hooks](https://reactjs.org/docs/hooks-reference.html#additional-hooks)
    
    -   [`useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer)
    -   [`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback)
    -   [`useMemo`](https://reactjs.org/docs/hooks-reference.html#usememo)
    -   [`useRef`](https://reactjs.org/docs/hooks-reference.html#useref)
    -   [`useImperativeHandle`](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)
    -   [`useLayoutEffect`](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
    -   [`useDebugValue`](https://reactjs.org/docs/hooks-reference.html#usedebugvalue)
    -   [`useDeferredValue`](https://reactjs.org/docs/hooks-reference.html#usedeferredvalue)
    -   [`useTransition`](https://reactjs.org/docs/hooks-reference.html#usetransition)
    -   [`useId`](https://reactjs.org/docs/hooks-reference.html#useid)
      
      
-   [Library Hooks](https://reactjs.org/docs/hooks-reference.html#library-hooks)
    
    -   [`useSyncExternalStore`](https://reactjs.org/docs/hooks-reference.html#usesyncexternalstore)
    -   [`useInsertionEffect`](https://reactjs.org/docs/hooks-reference.html#useinsertioneffect)


Hooks **don’t** work inside classes. But you can use them instead of writing classes.

To use a React hook, we need to import it from the React module.


**Only Call Hooks at the Top Level**

**Don’t call Hooks inside loops, conditions, or nested functions.** Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders



### `useState()`

**Returns a stateful value, and a function to update it.**

`useState` is a Hook that lets you add React state to function components. The state contains data specific to this component that may change over time. The state is user-defined.


A component needs `state` when some data associated with it changes over time. For example, a `Checkbox` component might need `isChecked` in its state.


A component cannot change its `props`, but it can change its `state`; The `state` is managed by the component itself. 


`useState()` creates a piece of state for a component, and its only parameter determines the _initial value_ of that state. It returns two things: the state, and a function that can be used to update the state later.


```jsx
const [state, setState] = useState(initialState);
```


- The only argument to the `useState()` Hook is the initial state.
- It returns a pair of values: the _current state_ and a _function_ that updates it.


**Import useState**

```jsx
  import React, { useState } from 'react';
```


**initialize a state:**

We need to declare a new state variable by calling the `useState` Hook. It returns a pair of values (an array with two items), to which we give names. You can name your own state variables.

We initialize it by passing a value as the only `useState` argument.

- The first returned item is the _current state_.
- The second returned item is itself a _function_. It lets us update the current state.


```jsx
  const [count, setCount] = useState(0);
```


This JavaScript syntax is called **array destructuring**.


**Use a state:**

```jsx
  <p>You clicked {count} times</p>
```


**Updating State**

```jsx
  <button onClick={() => setCount(count + 1)}> Click me </button>
```



### The Effect Hook

#### The _Effect Hook_ lets you perform side effects in function components.

By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed ( our “effect”), and call it later after performing the DOM updates.

Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do.


**Import useEffect**

```jsx
  import React, { useEffect } from 'react';
```


**Using Effect:**

```jsx
 useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
```


By default, effects run after every completed render, but you can choose to fire them [only when certain values have changed](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect).

You can tell React to _skip_ applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to `useEffect`.


```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```


**Effects Without Cleanup**

Effects without cleanup phase don’t return anything.

Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a cleanup. We say that because we can run them and immediately forget about them.


**Effects with Cleanup**

Some effects might require cleanup so they _return a function_.

For example, **we might want to set up a subscription** to some external data source. In that case, it is important to clean up so that we don’t introduce a memory leak.



### `useRef()`

```jsx
const refContainer = useRef(initialValue);
```

`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component.



### Custom Hook

#### Building your own Hooks lets you extract component logic into reusable functions.

A custom Hook is a JavaScript function whose name starts with `use` and that may call other Hooks.

When we want to share logic between two functions components, we extract it to a third function component (a custom hook).

 All we need to do is to extract some common code between two functions into a separate function. 
 
- Custom Hooks are a convention that naturally follows from the design of Hooks, rather than a React feature.
- Every time you use a custom Hook, all state and effects inside of it are fully isolated.



### `useReducer()`

An alternative to `useState`. Accepts a reducer of type `(state, action) => newState`, and returns the current state paired with a `dispatch` method. 

`useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. `useReducer` also lets you optimize performance for components that trigger deep updates because [you can pass `dispatch` down instead of callbacks](https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down).


**There are two different ways to initialize `useReducer` state.** 


The simplest way is to pass the initial state as a second argument:

```jsx
const [state, dispatch] = useReducer(
    reducer,
    {count: initialCount}  );
```


You can also create the initial state lazily. To do this, you can pass an `init` function as the third argument. The initial state will be set to `init(initialArg)`.

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init);
```


It lets you extract the logic for calculating the initial state outside the reducer. This is also handy for resetting the state later in response to an action.



### `useLayoutEffect()`

The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside `useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.

Prefer the standard `useEffect` when possible to avoid blocking visual updates.



### `useDeferredValue()`

`useDeferredValue` accepts a value and returns a new copy of the value that will defer to more urgent updates. If the current render is the result of an urgent update, like user input, React will return the previous value and then render the new value after the urgent render has completed.

```jsx
const deferredValue = useDeferredValue(value);
```

The benefits to using `useDeferredValue` is that React will work on the update as soon as other work finishes (instead of waiting for an arbitrary amount of time) deferred values can suspend without triggering an unexpected fallback for existing content.

`useDeferredValue` only defers the value that you pass to it. If you want to prevent a child component from re-rendering during an urgent update, you must also memoize that component with `React.memo` or `React.useMemo`.



### `useContext()`

**React Context is a way to manage state globally.**

It can be used together with the `useState` Hook to share state between deeply nested components more easily than with `useState` alone.

Accepts a context object and returns the current context value for that context.

A component calling `useContext` will always re-render when the context value changes.


```jsx
const value = useContext(MyContext);
```


If re-rendering the component is expensive, you can [optimize it by using memoization](https://github.com/facebook/react/issues/15156#issuecomment-474590693).


**Case of use**

State should be held by the highest parent component in the stack that requires access to the state.

To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".


### `useCallback()`

Returns a [memoized](https://en.wikipedia.org/wiki/Memoization) callback.

Pass an inline callback and an array of dependencies.  `useCallback` will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.


```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```


`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.



### `useMemo()`

Using `memo` will cause React to skip rendering a component if its props have not changed.

- This can improve performance.
- Returns a [memoized](https://en.wikipedia.org/wiki/Memoization) value.

Pass a “create” function and an array of dependencies. `useMemo` will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.


```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```


**You may rely on `useMemo` as a performance optimization, not as a semantic guarantee.**

If no array is provided, a new value will be computed on every render.



---

## Create React Application

Facebook has created a **Create React Application** with everything you need to build a React app.

It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files.

The Create React App uses ESLint to test and warn about mistakes in the code.

create-react-app takes one argument: the name you'd like to give your app. create-react-app uses this name to make a new directory, then creates the necessary files inside it. Make sure you `cd` to the place you'd like your app to live on your hard drive, then run the following in your terminal:

To create a Create React App run the following code on your terminal:


	npx create-react-app some-name-here


It does several things inside the directory:

-   Installs some npm packages essential to the functionality of the app.
  
-   Writes scripts for starting and serving the application.
  
-   Creates a structure of files and directories that define the basic app architecture.
  
-   Initializes the directory as a git repository, if you have git installed on your computer.

Make sure you have Node.js 5.2 or higher. Otherwise you must install npx.


---

## Single-page Application

A single-page application is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run. Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.

---

## Package Managers

Package managers are tools that allow you to manage dependencies in your project. [npm](https://www.npmjs.com/) and [Yarn](https://yarnpkg.com/) are two package managers commonly used in React applications.