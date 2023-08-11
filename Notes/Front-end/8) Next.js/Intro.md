## What is Next.js?

Next.js is a **React framework** for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

Next.js simplifies many aspects of building modern web applications by providing a powerful combination of server-side rendering, static site generation, routing, and data fetching capabilities. It has gained popularity for its ability to create performant and SEO-friendly applications while retaining the ease of development provided by React.

Some of the main Next.js features include:

|Feature|Description|
|---|---|
|[Routing](https://nextjs.org/docs/app/building-your-application/routing)|A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.|
|[Rendering](https://nextjs.org/docs/app/building-your-application/rendering)|Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes.|
|[Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)|Simplified data fetching with async/await in Server Components, and an extended `fetch` API for request memoization, data caching and revalidation.|
|[Styling](https://nextjs.org/docs/app/building-your-application/styling)|Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS|
|[Optimizations](https://nextjs.org/docs/app/building-your-application/optimizing)|Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience.|
|[TypeScript](https://nextjs.org/docs/app/building-your-application/configuring/typescript)|Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.|



---



## Features

- Image component
- Link Component
- Head Component
- Script Component
-  API Routes
---

## Server components

A server component in Next.js is a React component that is rendered on the server before being sent to the client. This can improve performance by reducing the amount of JavaScript that needs to be loaded on the client. Server components are also useful for fetching data from the server or accessing backend resources.

Instead of React rendering your whole application client-side (such as in the case of Single-Page Applications), React now gives you the flexibility to choose where to render your components based on their purpose.

Server components can be used in any Next.js project. However, they are most useful for pages that are static or that have a lot of data that needs to be fetched from the server.

If you are looking to improve the performance, SEO, or bundle size of your Next.js application, then you should consider using server components.

 **All components inside the App Router are Server Components by default.**

## Client Components

Client Components enable you to add client-side interactivity to your application. In Next.js, they are [pre-rendered](https://nextjs.org/docs/app/building-your-application/rendering) on the server and hydrated on the client.

The [`"use client"` directive](https://github.com/reactjs/rfcs/pull/227) is a convention to declare a boundary between a Server and Client Component module graph.

`"use client"` _sits_ between server-only and client code. It's placed at the top of a file, above imports, to define the _cut-off_ point where it crosses the boundary from the server-only to the client part. Once `"use client"` is defined in a file, all other modules imported into it, including child components, are considered part of the client bundle.

Since Server Components are the default, all components are part of the Server Component module graph unless defined or imported in a module that starts with the `"use client"` directive.

To simplify the decision between Server and Client Components, we recommend using Server Components (default in the `app` directory) until you have a use case for a Client Component.