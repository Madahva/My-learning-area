## Hooks

Hooks are functions that let you “hook into” React state and lifecycle features from function components.

React provides a few built-in Hooks like `useState`. You can also create your own Hooks to reuse stateful behavior between different components.

---

## State

A component needs `state` when some data associated with it changes over time. For example, a `Checkbox` component might need `isChecked` in its state.

The most important difference between `state` and `props` is that `props` are passed from a parent component, but `state` is managed by the component itself. 

A component cannot change its `props`, but it can change its `state`.

The state contains data specific to this component that may change over time. The state is user-defined.

---

## Key

React supports a `key` attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree.

A **key** is a special string attribute you need to include when creating arrays of elements. Keys help React identify which **items** have changed, are added, or are removed. Keys should be given to the elements inside an array to give the elements a stable identity.

Keys only need to be **unique** among sibling elements in the same array. They don’t need to be unique across the whole application or even a single component.

---

## Context

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language

Context is primarily used when some data needs to be accessible by _many_ components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

---

## Controlled and Uncontrolled Components

React has two different approaches to dealing with form inputs.


### Controlled Components

An input form element whose value is controlled by React is called a _controlled component_. When a user enters data into a controlled component a change event handler is triggered and your code decides whether the input is valid (by re-rendering with the updated value). If you do not re-render then the form element will remain unchanged.

[More information](https://reactjs.org/docs/forms.html#controlled-components)


### Uncontrolled Components

An _uncontrolled component_ works like form elements do outside of React. When a user inputs data into a form field (an input box, dropdown, etc) the updated information is reflected without React needing to do anything. However, this also means that you can’t force the field to have a certain value.

[More infotmation](https://reactjs.org/docs/uncontrolled-components.html)

In most cases you should use controlled components

---

## Lifecycle

Lifecycle methods are custom functionality that gets executed during the different phases of a component. There are methods available when the component gets created and inserted into the DOM ([mounting](https://reactjs.org/docs/react-component.html#mounting)), when the component updates, and when the component gets unmounted or removed from the DOM.

---

## Fragments

Fragments let you group a list of children without adding extra nodes to the DOM.

You can use `<></>` the same way you’d use any other element except that it doesn’t support keys or attributes.

---

## StrictMode

`StrictMode` is a tool for highlighting potential problems in an application. Like `Fragment`, `StrictMode` does not render any visible UI. It activates additional checks and warnings for its descendants.

---

## The Production Build

By default, React includes many helpful warnings. These warnings are very useful in development. However, they make React larger and slower so you should make sure to use the production version when you deploy the app.

---

## TypeScript

[TypeScript](https://www.typescriptlang.org/) is a programming language developed by Microsoft. It is a typed superset of JavaScript, and includes its own compiler. Being a typed language, TypeScript can catch errors and bugs at build time, long before your app goes live.

---

### Suspense

Suspense lets components “**wait**” for something before rendering. 

Today, Suspense only supports one use case: loading components dynamically with [`React.lazy`](https://reactjs.org/docs/code-splitting.html#reactlazy).

`React.lazy()` lets you define a component that is loaded dynamically. This helps reduce the bundle size to delay loading components that aren’t used during the initial render.