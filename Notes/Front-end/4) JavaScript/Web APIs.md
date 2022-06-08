# APIs

**Application Programming Interfaces (APIs)** are constructs made available in programming languages to allow developers to create complex functionality more easily. 

They abstract more complex code away from you, providing some easier syntax to use in its place.


## Browser APIs

Browser APIs are built into your web browser, and are able to expose data from the surrounding computer environment, or do useful complex things.


### The DOM (Document Object Model) API 

This API allows you to manipulate HTML and CSS, creating, removing and changing HTML, dynamically applying new styles to your page, etc.


### Web storage API

The Web Storage API is a simple syntax for storing and retrieving data in the browser. It store simple name/value pairs of data (limited to strings, numbers, etc.) and retrieve these values when needed.

**The localStorage object provides access to a local storage for a particular Web Site**. It allows you to store, read, add, modify, and delete data items for that domain. The data is stored with no expiration date, and will not be deleted when the browser is closed. 

The sessionStorage object is identical to the localStorage object. The sessionStorage object stores data for one session. The data is deleted when the browser is closed.


### IndexedDB

The IndexedDB API is a complete database system available in the browser in which you can store complex related data, the types of which aren't limited to simple values like strings or numbers. You can store videos, images, and pretty much anything else in an IndexedDB instance.


### Fetch API

This API allows us to make network requests to retrieve resources from a server via JavaScript (e.g. images, text, JSON, even HTML snippets), meaning that we can update small sections of content without having to reload the entire page.

The global **`fetch()`** method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.


#### Catching errors

The `fetch()` API can throw an error for many reasons (for example, because there was no network connectivity or the URL was malformed in some way) and we are throwing an error ourselves if the server returned an error.



## Third party APIs

Third party APIs are APIs provided by third parties — generally companies such as Facebook, Twitter, or Google — to allow you to access their functionality via JavaScript and use it on your site.

To access them from JavaScript you first need to connect to the API functionality and make it available on your page.

Most APIs require you to use some kind of developer key, for reasons of security and accountability.



## RESTful API

We get data by making HTTP requests to specific URLs, with data like search terms and other properties encoded in the URL (often as URL parameters). This is a common pattern you'll encounter with APIs.