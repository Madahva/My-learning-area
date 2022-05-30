## Context

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language

Context is primarily used when some data needs to be accessible by _many_ components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

---


## Fragments

Fragments let you group a list of children without adding extra nodes to the DOM.

You can use `<></>` the same way you’d use any other element except that it doesn’t support keys or attributes.

---

## StrictMode

`StrictMode` is a tool for highlighting potential problems in an application. Like `Fragment`, `StrictMode` does not render any visible UI. It activates additional checks and warnings for its descendants.

---

## Key

React supports a `key` attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree.

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