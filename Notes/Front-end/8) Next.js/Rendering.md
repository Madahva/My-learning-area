
## Rendering

By default, Next.js pre-renders every page. This means that Next.js _generates HTML for each page in advance_, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization).

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called **hydration**.)


With Next.js, three types of rendering methods are available: **Server-Side Rendering**, **Static Site Generation**, and **Client-Side Rendering**.

### Pre-Rendering

Server-Side Rendering and Static Site Generation are also referred to as **Pre-Rendering** because the fetching of external data and transformation of React components into HTML happens before the result is sent to the client. Pre-rendering means the HTML is generated in advance, on a server, instead of having it all done by JavaScript on the user's device.


#### Server-Side Rendering

With server-side rendering, the HTML of the page is generated on a server for **each** request. The generated HTML, JSON data, and JavaScript instructions to make the page interactive are then sent to the client.

On the client, the HTML is used to show a fast non-interactive page, while React uses the JSON data and JavaScript instructions to make components interactive (for example, attaching event handlers to a button). This process is called **hydration**.

#### Static Site Generation

With Static Site Generation, the HTML is generated on the server, but unlike server-side rendering, there is no server at runtime. Instead, content is generated once, at build time, when the application is deployed, and the HTML is stored in a [CDN](https://nextjs.org/learn/foundations/how-nextjs-works/cdns-and-edge) and re-used for each request.

### Client-Side Rendering

In a standard React application, the browser receives an empty HTML shell from the server along with the JavaScript instructions to construct the UI. This is called **client-side rendering** because the initial rendering work happens on the user's device.

### When to Use Static Generation v.s. Server-side Rendering

We recommend using [**Static Generation**](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use [Static Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose [Static Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended).

On the other hand, [Static Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use [**Server-side Rendering**](https://nextjs.org/docs/basic-features/pages#server-side-rendering). It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data.

---