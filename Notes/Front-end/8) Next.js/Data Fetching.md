# Mastering Data Fetching, Caching, and Revalidating in Next.js


In the world of web development, data fetching is a fundamental aspect of building interactive and dynamic applications. This blog post delves into the intricacies of data fetching within React and Next.js, providing you with insights on how to fetch, cache, and revalidate data effectively.

**Four Ways to Fetch Data:**
Before we explore the finer details, let's establish the four primary methods of fetching data in Next.js:

1. **On the server, with `fetch`**
2. **On the server, using third-party libraries**
3. **On the client, via a Route Handler**
4. **On the client, with third-party libraries**

Each approach has its use cases, and we'll dissect them one by one.

**Fetching Data on the Server with `fetch`:**
Next.js simplifies server-side data fetching by extending the native `fetch` API. This extension allows you to configure caching and revalidation behavior for each server-side fetch request. Moreover, React enhances `fetch` by automatically memoizing fetch requests during component tree rendering.

Here's an example of how you can use `fetch` on the server side:

```tsx
async function getData() {
  const res = await fetch('https://api.example.com/...')
  // Handle the response and potential errors

  return res.json()
}

export default async function Page() {
  const data = await getData()

  return <main></main>
}
```

**Caching Data:**
Caching is essential to reduce the load on your data source and enhance performance. Next.js automatically caches the results of `fetch` requests on the server using the Data Cache. You can specify caching options within your `fetch` requests.

For instance:

```js
fetch('https://...', { cache: 'force-cache' })
```

**Revalidating Data:**
Revalidation is the process of purging the Data Cache and fetching the latest data. You can perform revalidation in two ways:

- **Time-based revalidation**: Automatically revalidate data after a set time interval.
- **On-demand revalidation**: Manually revalidate data based on events, such as form submissions or content updates from a headless CMS.

Time-based revalidation can be implemented using the `next.revalidate` option:

```js
fetch('https://...', { next: { revalidate: 3600 } })
```

On-demand revalidation involves tagging cache entries and then triggering revalidation for specific tags when needed.

**Error Handling and Revalidation:**
In the event of an error during revalidation, Next.js will continue serving the last successfully cached data. The subsequent request will retry the revalidation process.

**Opting Out of Data Caching:**
There are scenarios where you might want to opt out of data caching. You can achieve this by using options like `cache: 'no-store'` in `fetch` requests or setting specific cache options at the route segment level.

**Fetching Data on the Server with Third-party Libraries:**
Sometimes, you may need to fetch data from third-party libraries, such as databases, CMSs, or ORMs, which don't directly support or expose `fetch`. In such cases, you can configure caching and revalidation behavior using Route Segment Config Options and React's `cache` function.

**Fetching Data on the Client with Route Handlers:**
If you need to fetch data on the client side, you can call a Route Handler from the client. Route Handlers execute on the server and return data to the client, making it useful for scenarios where you need to keep sensitive information on the server.

**Fetching Data on the Client with Third-party Libraries:**
For client-side data fetching, third-party libraries like SWR and React Query come to the rescue. These libraries provide their APIs for memoizing requests, caching, revalidating, and mutating data.

By mastering data fetching, caching, and revalidating in Next.js, you can create web applications that are not only dynamic and responsive but also efficient and well-optimized.

**Conclusion:**
Effective data management is at the heart of every successful web application. With Next.js, you have a robust toolkit to tackle data fetching challenges, whether on the server or client side. Embrace these techniques, and you'll be well on your way to building high-performance web applications that delight your users.

---


# Common Data Fetching Patterns in React and Next.js

Data fetching is a critical aspect of building web applications, and understanding the different patterns and best practices for data fetching in React and Next.js can greatly enhance your application's performance and maintainability. In this article, we'll explore several common data fetching patterns and how to effectively use them.

## Fetching Data on the Server

Fetching data on the server is a recommended practice whenever possible. There are several advantages to server-side data fetching:

- **Direct Access to Backend Resources:** Server-side fetching allows direct access to backend data resources such as databases. This ensures efficient and secure retrieval of data.

- **Enhanced Security:** It keeps sensitive information, like access tokens and API keys, hidden from the client, enhancing the security of your application.

- **Reduced Client-Side Work:** Data fetching and rendering occur in the same environment, reducing back-and-forth communication between the client and server. This also minimizes the workload on the client's main thread, contributing to improved performance.

- **Efficient Multi-Fetch:** Server-side data fetching can perform multiple data fetches with a single round-trip, minimizing the need for numerous individual client requests.

- **Reduced Waterfalls:** It reduces client-server waterfalls, further improving performance. Additionally, it can optimize data fetching by choosing a server region closer to the data source, reducing latency.

You can achieve server-side data fetching using Server Components, Route Handlers, and Server Actions in Next.js.

## Fetching Data Where It's Needed

In scenarios where multiple components within a tree require the same data (e.g., current user information), you don't have to fetch the data globally or pass it as props between components. Instead, you can use the `fetch` function or React's `cache` within the component that needs the data. The automatic memoization of `fetch` requests ensures that multiple requests for the same data don't impact performance.

This approach also applies to layouts, as passing data between a parent layout and its children can be challenging. You can confidently fetch data within the component that needs it, without worrying about performance bottlenecks.

## Streaming

Streaming and React Suspense are powerful features that enable progressive rendering and incremental streaming of UI units to the client. In Next.js with Server Components and nested layouts, you can instantly render parts of the page that don't require data and display a loading state for components fetching data. This user-centric approach ensures users can interact with the page without waiting for the entire page to load.

Streaming and Suspense are discussed in detail in the Loading UI and Streaming and Suspense sections of the Next.js documentation.

## Parallel and Sequential Data Fetching

When fetching data within React components, it's essential to understand two common data fetching patterns: parallel and sequential.

### Sequential Data Fetching

Sequential data fetching involves making requests that depend on each other, potentially creating waterfalls. While there are cases where this pattern is necessary (e.g., one fetch depends on the result of another), unintentional waterfalls can lead to longer loading times.

For instance, if you have nested components, and each component fetches its data, data fetching will occur sequentially if the data requests are different. To prevent the entire route from being blocked by data fetching, you can use `loading.js` for route segments or React's `<Suspense>` to display instant loading states while React streams the result.

### Parallel Data Fetching

Parallel data fetching, on the other hand, initiates requests eagerly, loading data simultaneously. This approach reduces client-server waterfalls and minimizes the time required to load data.

To fetch data in parallel, define the requests outside the components that use the data and call them from within the component. Although both requests initiate in parallel, the user won't see the rendered result until both promises resolve. You can enhance the user experience by adding a Suspense Boundary to display partial results as soon as possible.

## Preloading Data

Another strategy to prevent waterfalls is using the preload pattern. You can create a `preload` function to optimize parallel data fetching. This approach eliminates the need to pass promises as props, and the `preload` function can have any name, making it a versatile pattern.

To implement the preload pattern, define a `preload` function for fetching the required data. Then, use it to start loading data when needed. This approach allows you to perform other asynchronous tasks while data loading is in progress, ensuring a smooth user experience.

## Using React cache, server-only, and the Preload Pattern

For maximum control over data fetching, you can combine the React `cache` function, the preload pattern, and the `server-only` package. This combination allows you to eagerly fetch and cache data, ensuring it's only fetched on the server and not on the client.

By structuring your code this way, you can maintain better control over when and how data is fetched, enhancing the performance and reliability of your application.

In conclusion, understanding and implementing these common data fetching patterns can significantly improve the performance and maintainability of your React and Next.js applications. Depending on your specific use case and requirements, you can choose the most appropriate pattern to ensure efficient and responsive data fetching.


---


# Forms and Mutations

Forms are a fundamental part of web applications, enabling users to interact with and manipulate data. When it comes to handling form submissions and data mutations in Next.js, there are several powerful approaches to consider. In this blog post, we'll explore these concepts and how they can be leveraged to build robust web applications.

**1. The Power of API Routes**

One of the key features that Next.js offers for handling form submissions and data mutations is its API Routes. These routes provide a seamless way to create endpoints for server-side processing. Here are some important takeaways:

- **Same-Origin by Default**: API Routes are same-origin by default, ensuring that your data mutations stay within your application's domain.

- **Secure by Design**: Because API Routes run on the server, sensitive information like API keys can be securely stored as environment variables without exposing them to the client, enhancing the overall security of your application.

- **Client-Server Synchronization**: Using API Routes, you can create a smooth client-server synchronization process for handling form submissions and mutations.

**2. Server Actions for Data Handling**

Next.js introduces the concept of Server Actions, providing an elegant way to handle form submissions and data mutations. Here's how they work:

- **Server Functions**: Instead of manually creating API endpoints, you define asynchronous server functions that can be directly invoked from your components.

- **Progressive Enhancement**: Server Actions can be defined in Server Components, allowing your forms to function even without JavaScript, ensuring progressive enhancement.

- **Runtime Inheritance**: Server Actions inherit the runtime from the page or layout they are used on, making them versatile and adaptable.

**3. Revalidating Cached Data**

Server Actions seamlessly integrate with Next.js' caching and revalidation architecture. This means that you can update cached data and revalidate cache keys that should change after a form submission or data mutation. With Server Actions, you can have multiple actions per route without the need for the browser to refresh.

**4. Redirecting for a Better User Experience**

After a successful form submission or data mutation, you may want to redirect the user to a different route. In Next.js, you can easily achieve this by using the `redirect` method, providing a seamless and intuitive user experience.

**5. Form Validation**

Validating form input is crucial for data integrity. Next.js provides recommendations for form validation, including using HTML validation attributes like `required` and `type`, as well as more advanced server-side validation using libraries like `zod` to ensure the structure of parsed form data matches your expectations.

**6. Handling Loading and Error States**

During form submission or data mutation, it's essential to provide clear feedback to users. Depending on your implementation, you can display loading states when the request is in progress and error messages when something goes wrong. In Next.js, this can be achieved using React state, making the user experience smoother.

**7. Optimistic Updates for Real-Time Interaction**

For real-time interaction, you can implement optimistic updates using the `useOptimistic` hook. This allows you to update the UI optimistically before the Server Action completes, providing a more responsive and engaging user experience.

**8. Cookie Management**

Next.js offers built-in support for setting, reading, and deleting cookies. You can set cookies in API Routes using the `setHeader` method or within Server Actions using the `cookies` function. Similarly, you can read and delete cookies using these methods, providing full control over cookie management in your application.

In conclusion, Next.js empowers developers with powerful tools and concepts for handling form submissions and data mutations in web applications. Whether you prefer API Routes, Server Actions, or a combination of both, Next.js provides the flexibility and security needed to create robust and efficient web forms. By understanding and implementing these concepts, you can build responsive and user-friendly applications that meet your specific requirements. Happy coding!