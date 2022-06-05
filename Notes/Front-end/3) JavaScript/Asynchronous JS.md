# Asynchronous programming 

Asynchronous programming is a technique that enables your program to start a potentially long-running task, and then rather than having to wait until that task has finished, to be able to continue to be responsive to other events while the task runs. Once the task is completed, your program is presented with the result.


## Callbacks

A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time.


## Promises

A promise is an object returned by an asynchronous function, which represents the current state of the operation. 

At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.


## Async and await

The `async` keyword gives you a simpler way to work with asynchronous promise-based code. Adding `async` at the start of a function makes it an async function.

The `async` and `await` keywords make it easier to build an operation from a series of consecutive asynchronous function calls, avoiding the need to create explicit promise chains, and allowing you to write code that looks just like synchronous code.


## Web workers

 Web workers enable a web application to offload tasks to a separate thread. The main thread and the worker don't directly share any variables, but communicate by sending messages, which are received by the other side as `message` events.

Workers can be an effective way to keep the main application responsive, although they can't access all the APIs that the main application can, and in particular can't access the DOM

