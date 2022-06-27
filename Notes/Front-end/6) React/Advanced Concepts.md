## Rendering with iteration

**Rendering List of Elements**

In React, you will render lists with some type of loop.

The JavaScript `map()` array method is generally the preferred method.


The `.map()` method allows you to run a function on each item in the array, returning a new array as the result.

```jsx
const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)
```

To render an array of components in React you simply need to **pass the array into JSX by wrapping it in curly braces**, just be sure that your components each have a unique key prop because React will use this when rendering it to avoid bugs.

**You should always pass a unique key to anything you render with iteration.**

---

## Key

React supports a `key` attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree.

Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

Keys only need to be **unique** among sibling elements in the same array. They don’t need to be unique across the whole application or even a single component.

 You cannot use the word `key` for any other purpose.

---

## Context

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

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

## Suspense

Suspense lets components “**wait**” for something before rendering. 

Today, Suspense only supports one use case: loading components dynamically with [`React.lazy`](https://reactjs.org/docs/code-splitting.html#reactlazy).

`React.lazy()` lets you define a component that is loaded dynamically. This helps reduce the bundle size to delay loading components that aren’t used during the initial render.

---

## Testing

There are a few ways to test React components. Broadly, they divide into two categories:

-   **Rendering component trees** in a simplified test environment and asserting on their output.
-   **Running a complete app** in a realistic browser environment (also known as “end-to-end” tests).


### Recommended Tools for rendering component trees

**[Jest](https://facebook.github.io/jest/)** is a JavaScript test runner that lets you access the DOM via [`jsdom`](https://reactjs.org/docs/testing-environments.html#mocking-a-rendering-surface). While jsdom is only an approximation of how the browser works, it is often good enough for testing React components. Jest provides a great iteration speed combined with powerful features like mocking [modules](https://reactjs.org/docs/testing-environments.html#mocking-modules) and [timers](https://reactjs.org/docs/testing-environments.html#mocking-timers) so you can have more control over how the code executes.

**[React Testing Library](https://testing-library.com/react)** is a set of helpers that let you test React components without relying on their implementation details. This approach makes refactoring a breeze and also nudges you towards best practices for accessibility. Although it doesn’t provide a way to “shallowly” render a component without its children, a test runner like Jest lets you do this by [mocking](https://reactjs.org/docs/testing-recipes.html#mocking-modules).


### Test runners

Test runners like [Jest](https://jestjs.io/), [mocha](https://mochajs.org/), [ava](https://github.com/avajs/ava) let you write test suites as regular JavaScript, and run them as part of your development process. Additionally, test suites are run as part of continuous integration.

-   Jest is widely compatible with React projects, supporting features like mocked [modules](https://reactjs.org/docs/testing-environments.html#mocking-modules) and [timers](https://reactjs.org/docs/testing-environments.html#mocking-timers), and [`jsdom`](https://reactjs.org/docs/testing-environments.html#mocking-a-rendering-surface) support. **If you use Create React App, [Jest is already included out of the box](https://facebook.github.io/create-react-app/docs/running-tests) with useful defaults.**
-   Libraries like [mocha](https://mochajs.org/#running-mocha-in-the-browser) work well in real browser environments, and could help for tests that explicitly need it.
-   End-to-end tests are used for testing longer flows across multiple pages, and require a [different setup](https://reactjs.org/docs/testing-environments.html#end-to-end-tests-aka-e2e-tests).


### End-to-end tests

End-to-end tests are useful for testing longer workflows, especially when they’re critical to your business (such as payments or signups). For these tests, you’d probably want to test how a real browser renders the whole app, fetches data from the real API endpoints, uses sessions and cookies, navigates between different links. You might also likely want to make assertions not just on the DOM state, but on the backing data as well (e.g. to verify whether the updates have been persisted to the database).

In this scenario, you would use a framework like [Cypress](https://www.cypress.io/), [Playwright](https://playwright.dev/) or a library like [Puppeteer](https://pptr.dev/) so you can navigate between multiple routes and assert on side effects not just in the browser, but potentially on the backend as well.

---

### CSS in React

The discussion about CSS-in-JS, and whether or not to use it in your projects, has been active for nearly half a decade now.

“CSS-in-JS” refers to a pattern where CSS is composed using JavaScript instead of defined in external files.

This _functionality is not a part of React, but provided by third-party libraries._ React does not have an opinion about how styles are defined; if in doubt, a good starting point is to define your styles in a separate `*.css` file as usual and refer to them using [`className`](https://reactjs.org/docs/dom-elements.html#classname).

---

## Animations 

React can be used to power animations. See [React Transition Group](https://reactcommunity.org/react-transition-group/), [React Motion](https://github.com/chenglou/react-motion), [React Spring](https://github.com/react-spring/react-spring), or [Framer Motion](https://framer.com/motion), for example.

---

## File structure 

React doesn’t have opinions on how you put files into folders. That said there are a few common approaches popular in the ecosystem you may want to consider.


#### Grouping by features or routes

One common way to structure projects is to locate CSS, JS, and tests together inside folders grouped by feature or route.

```uwu
common/
  Avatar.js
  Avatar.css
  APIUtils.js
  APIUtils.test.js
feed/
  index.js
  Feed.js
  Feed.css
  FeedStory.js
  FeedStory.test.js
  FeedAPI.js
profile/
  index.js
  Profile.js
  ProfileHeader.js
  ProfileHeader.css
  ProfileAPI.js
```

The definition of a “feature” is not universal, and it is up to you to choose the granularity.


#### Grouping by file type

Another popular way to structure projects is to group similar files together, for example:

```
api/
  APIUtils.js
  APIUtils.test.js
  ProfileAPI.js
  UserAPI.js
components/
  Avatar.js
  Avatar.css
  Feed.js
  Feed.css
  FeedStory.js
  FeedStory.test.js
  Profile.js
  ProfileHeader.js
  ProfileHeader.css
```