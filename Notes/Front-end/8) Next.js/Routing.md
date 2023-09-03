
Next.js uses a file-system based router where **folders** are used to define routes.

A special page.js file is used to make route segments publicly accessible.

![[Pasted image 20230812104643.png]]

## The app Router

In version 13, Next.js introduced a new **App Router** built on [React Server Components](https://nextjs.org/docs/getting-started/react-essentials#server-components), which supports shared layouts, nested routing, loading states, error handling, and more.

## File Conventions

Next.js provides a set of special files to create UI with specific behavior in nested routes:

|file|description|
|---|---|
|[`layout`](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)|Shared UI for a segment and its children|
|[`page`](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)|Unique UI of a route and make routes publicly accessible|
|[`loading`](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)|Loading UI for a segment and its children|
|[`not-found`](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)|Not found UI for a segment and its children|
|[`error`](https://nextjs.org/docs/app/building-your-application/routing/error-handling)|Error UI for a segment and its children|
|[`global-error`](https://nextjs.org/docs/app/building-your-application/routing/error-handling)|Global Error UI|
|[`route`](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)|Server-side API endpoint|
|[`template`](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates)|Specialized re-rendered Layout UI|
|[`default`](https://nextjs.org/docs/app/api-reference/file-conventions/default)|Fallback UI for [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)|

---

 You should **not** manually add `<head>` tags such as `<title>` and `<meta>` to root layouts. Instead, you should use the [Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) which automatically handles advanced requirements such as streaming and de-duplicating `<head>` elements.


---

## Navigation

The App Router uses a hybrid approach for routing and navigation. On the server, your application code is automatically code-split by route segments. And on the client, Next.js [prefetches](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#1-prefetching) and [caches](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-caching) the route segments. This means, when a user navigates to a new route, the browser doesn't reload the page, and only the route segments that change re-render - improving the navigation experience and performance.

- Prefetching is a way to preload a route in the background before the user visits it.

- Next.js has an **in-memory client-side cache** called the [Router Cache](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#caching-data#router-cache). As users navigate around the app, the React Server Component Payload of [prefetched](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#1-prefetching) route segments and visited routes are stored in the cache.

## Link

`<Link>` is a built-in component that extends the HTML `<a>` tag to provide [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#1-prefetching) and client-side navigation between routes. It is the primary way to navigate between routes in Next.js.

You can use it by importing it from `next/link`, and passing a `href` prop to the component:
  

```ts
import Link from 'next/link' export default function Page() {  return <Link href="/dashboard">Dashboard</Link>}
```

There are a couple of hooks you can use and others optional props you can pass to `<Link>`. See the [API reference](https://nextjs.org/docs/app/api-reference/components/link) for more.

**Recommendation:** Use the `<Link>` component to navigate between routes unless you have a specific requirement for using `useRouter`.


---

# Route Groups

In the `app` directory, nested folders are normally mapped to URL paths. However, you can mark a folder as a **Route Group** to prevent the folder from being included in the route's URL path.

This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.

- Creating multiple root layouts
- Organize routes
- Opt specific routes into a layout


# Dynamic Routes

When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or [prerendered](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params) at build time.

---

# Loading

## **Loading UI with React Suspense:**

The `loading.js` file convention is introduced to create meaningful Loading UI using React Suspense. This helps provide users with an immediate loading state while content loads, improving user experience. An instant loading state could include loading indicators like skeletons, spinners, or a partial view of future content.

To create a loading state:

- Add a `loading.js` file within a specific route's folder.
- Inside `loading.js`, you can define loading UI components, such as skeletons.

This loading state is shown immediately upon navigation, while the actual content is being loaded. It's automatically replaced with the real content once rendering is complete.

### **Streaming with Suspense:**

Streaming involves progressively sending smaller chunks of a page's HTML from the server to the client, allowing parts of the page to be displayed sooner, even if all data hasn't loaded. This is a contrast to traditional Server-Side Rendering (SSR), where the whole page is rendered sequentially before being displayed to the user.

Streaming is particularly beneficial for improving perceived loading performance and interactivity, as components with higher priority or no data dependency can be sent and hydrated earlier.

In the context of React, the `<Suspense>` component is used to manage asynchronous actions, like fetching data, and displaying fallback UI while the action is ongoing. Once the action completes, the actual UI is swapped in.

Example usage of `<Suspense>`:

- Wrap components that perform asynchronous actions inside `<Suspense>` tags.
- Define fallback UI that is displayed while the action is in progress.
- The actual component is swapped in once the action completes.

Streaming also has positive implications for SEO, as Next.js ensures that important metadata is generated and included in the initial streamed response, while the server-rendered nature of streaming doesn't impact SEO.


---

# Error Handling


### Next.js Error Handling with `error.js`

Next.js's `error.js` file convention allows you to gracefully handle unexpected runtime errors in nested routes.

To use `error.js`, simply add an `error.js` file to any route segment in your Next.js application. The `error.js` file should export a React component that will be rendered when an error occurs in the route segment.

The `error.js` component can use the `reset()` function to prompt the user to attempt to recover from the error. When executed, the `reset()` function will try to re-render the Error boundary's contents. If successful, the fallback error component is replaced with the result of the re-render.

Here is an example of an `error.js` file:

``` ts
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}
```

The `error.js` file convention is a great way to ensure that your Next.js application handles errors gracefully and provides a user-friendly experience for your visitors.

Here are some additional things to keep in mind when using `error.js`:

- Errors bubble up to the nearest parent error boundary. This means that an `error.js` file in a parent route segment will also handle errors that occur in its child route segments.
- `error.js` boundaries do not catch errors thrown in `layout.js` or `template.js` components of the same segment. This is intentional to keep important UI that is shared between sibling routes (such as navigation) visible and functional when an error occurs.
- To handle errors within a specific layout or template, place an `error.js` file in the layouts parent segment.
- To handle errors within the root layout or template, use a variation of `error.js` called `global-error.js`.
- The root `app/error.js` boundary does not catch errors thrown in the root `app/layout.js` or `app/template.js` component.
- To specifically handle errors in these root components, use a variation of `error.js` called `app/global-error.js` located in the root `app` directory.
- Unlike the root `error.js`, the `global-error.js` error boundary wraps the entire application, and its fallback component replaces the root layout when active. Because of this, it is important to note that `global-error.js` must define its own `<html>` and `<body>` tags.
- `global-error.js` is the least granular error UI and can be considered "catch-all" error handling for the whole application. It is unlikely to be triggered often as root components are typically less dynamic, and other `error.js` boundaries will catch most errors.
- Even if a `global-error.js` is defined, it is still recommended to define a root `error.js` whose fallback component will be rendered within the root layout, which includes globally shared UI and branding.

---

# Parallel Routes

Parallel Routes is a feature in Next.js that allows you to simultaneously render multiple pages in the same view. This can be used to implement complex routing patterns, such as modals and conditional routing.

The `useSelectedLayoutSegment(s)` hook allows you to read the active route segment within a slot. 

Here are some examples of how you can use Parallel Routes:

- **Render a modal:** You can use Parallel Routes to render a modal that can be opened by navigating to a matching route. For example, you could create a `@modal/login` slot that renders a modal when the user navigates to the `/login` route.
- **Render a different page depending on the user's authentication state:** You can use Parallel Routes to render a different page depending on the user's authentication state. For example, you could create an `@auth/login` slot that renders the login page when the user is not authenticated, and the dashboard page when the user is authenticated.
- **Render multiple pages in the same view, each with its own independent error and loading states:** Parallel Routes allows you to render multiple pages in the same view, each with its own independent error and loading states. This can be useful for creating complex applications with multiple components that need to be rendered simultaneously.


---


# Intercepting Routes

Intercepting routes is a feature in Next.js that allows you to load a route from another part of your application within the current layout. This routing paradigm can be useful when you want to display the content of a route without the user switching to a different context.

For example, you can use intercepting routes to create modals. When a user clicks on a photo in a feed, you can display the photo in a modal, overlaying the feed. In this case, Next.js intercepts the `/photo/123` route, masks the URL, and overlays it over `/feed`.

However, when navigating to the photo by clicking a shareable URL or by refreshing the page, the entire photo page should render instead of the modal. No route interception should occur.

This pattern can be useful for a variety of advanced routing scenarios, such as:

- **Modals:** Intercepting routes can be used to create modals that can be opened by navigating to a matching route. This can be useful for displaying content without the user switching to a different context.
- **Overlays:** Intercepting routes can be used to create overlays that can be opened by navigating to a matching route. This can be useful for displaying information or dialogs without the user switching to a different context.
- **Context-aware routing:** Intercepting routes can be used to load a route from another part of your application based on the current context. This can be useful for creating complex routing patterns that are dependent on the user's state.


---

# Route Handlers

Create custom request handlers for a given route using the Web's Request and Response APIs.

**Overview:**
Route Handlers allow you to create custom request handlers for a specific route using the Web Request and Response APIs. They are a fundamental part of Next.js applications and are located inside the `app` directory.

**Key Points:**
1. **Convention:** Route Handlers are defined in a `route.js|ts` file inside the `app` directory.
   
2. **Supported HTTP Methods:** Route Handlers support standard HTTP methods like `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, and `OPTIONS`. If an unsupported method is used, Next.js returns a `405 Method Not Allowed` response.

3. **Extended NextRequest and NextResponse APIs:** Next.js extends the native Request and Response objects with `NextRequest` and `NextResponse`, providing convenient helpers for advanced use cases.

4. **Caching:** Route Handlers are cached by default when using the `GET` method with the `Response` object. This can be useful for optimizing performance.

5. **Opting out of caching:** You can opt out of caching by using methods other than `GET`, employing dynamic functions, or specifying dynamic mode in the Segment Config Options.

6. **Route Resolution:** Route Handlers are the lowest-level routing primitive and do not participate in layouts or client-side navigation. They cannot exist at the same route segment level as `page.js`.

**Examples and Use Cases:**
- Revalidating Cached Data: You can revalidate cached data with the `next.revalidate` option or the `revalidate` segment config option.
- Dynamic Functions: Route Handlers can be used with dynamic functions like `cookies` and `headers` to handle cookies and headers in requests.
- Redirects: You can use Route Handlers to implement redirects.
- Dynamic Route Segments: Route Handlers can use dynamic segments to create request handlers from dynamic data.
- Streaming: Streaming is supported and can be used for various purposes, such as streaming AI-generated content.
- Request Body: You can read the request body using standard Web API methods.
- Request Body FormData: Route Handlers can handle form data submitted in requests.
- CORS: CORS headers can be set in Route Handlers to control cross-origin resource sharing.
- Edge and Node.js Runtimes: Route Handlers support both Edge and Node.js runtimes.
- Non-UI Responses: Route Handlers can return non-UI content, such as XML or JSON responses.
- Segment Config Options: You can configure Route Handlers using segment config options, just like pages and layouts.

Route Handlers are a powerful feature of Next.js that enable you to customize request handling for specific routes in your application, making it versatile and efficient.

---

# Middleware

Middleware in Next.js allows you to run code before a request is completed, enabling you to modify responses, rewrite URLs, set headers, and perform other actions based on incoming requests. This guide provides an overview of Middleware in Next.js and its various capabilities.

Key Points:

1. **Middleware Basics**:
   - Middleware runs code before a request is completed.
   - It allows you to modify responses, rewrite URLs, set headers, and more.
   - Middleware execution occurs before cached content and route matching.

2. **Convention**:
   - Middleware is defined in a file named `middleware.ts` (or `.js`) at the root of your Next.js project.
   - It can also be placed inside the `src` directory if applicable.

3. **Example**:
   - Middleware is defined using functions that take a `NextRequest` object and return a `NextResponse`.
   - You can use conditional statements to control Middleware behavior based on the incoming request.

4. **Matching Paths**:
   - Middleware can be configured to run on specific paths using the `matcher` configuration.
   - Path matching allows for fine-grained control over when Middleware executes.

5. **NextResponse**:
   - The `NextResponse` API enables actions like redirection, rewriting, setting headers, and managing cookies.
   - Responses can be sent directly from Middleware, allowing for custom error handling and authentication.

6. **Using Cookies**:
   - Middleware provides convenient methods for working with cookies in both incoming requests and outgoing responses.
   - Cookies can be accessed, set, and manipulated using the `cookies` extension.

7. **Setting Headers**:
   - You can set both request and response headers using the `NextResponse` API.
   - Middleware can clone request headers, set new headers, and modify response headers as needed.

8. **Producing a Response**:
   - Middleware can produce responses directly by returning a `Response` or `NextResponse` instance.
   - This capability is useful for handling authentication, error responses, and custom logic within Middleware.

9. **Advanced Middleware Flags**:
   - Two advanced flags, `skipMiddlewareUrlNormalize` and `skipTrailingSlashRedirect`, provide more control over Middleware behavior.
   - They allow you to disable URL normalization and trailing slash redirects when needed.

10. **Version History**:
    - The version history of Next.js highlights key updates and features related to Middleware, including advanced flags and capabilities.

Middleware in Next.js is a versatile tool for customizing the behavior of your application. It empowers developers to handle authentication, routing, error responses, and other tasks with precision and flexibility.

---

# Project Organization and File Colocation in Next.js

Learn how to effectively organize your Next.js project and colocate files for improved project structure and maintainability.

**Key Points:**

1. **Safe Colocation by Default:**
   - In the `app` directory, Next.js defines route structure through a nested folder hierarchy.
   - Folders represent route segments, but a route is not publicly accessible until a `page.js` or `route.js` file is added to a segment.
   - Even when a route is made publicly accessible, only the content from `page.js` or `route.js` is sent to the client.
   - Project files can be safely colocated inside route segments in the `app` directory without becoming publicly accessible.

2. **Project Organization Features:**
   - Next.js offers features to help organize your project effectively.
   
   **Private Folders:**
   - Create private folders by prefixing a folder name with an underscore (e.g., `_folderName`).
   - Private folders opt out of routing, making them useful for separating UI logic from routing logic, organizing internal files, sorting in code editors, and avoiding naming conflicts.

   **Route Groups:**
   - Use route groups by wrapping a folder in parenthesis (e.g., `(folderName)`).
   - Route groups are for organizational purposes and do not affect the route's URL path.
   - They help organize routes into groups and enable nested layouts within the same route segment level.

   **`src` Directory:**
   - Next.js supports storing application code, including the `app` directory, inside an optional `src` directory.
   - This separation keeps application code distinct from project configuration files.

   **Module Path Aliases:**
   - Next.js supports module path aliases to simplify imports across nested project files.

3. **Project Organization Strategies:**
   - Next.js is unopinionated about how you organize and colocate your project files, offering flexibility to tailor your approach to your team's needs.
   
   **Store Project Files Outside of `app`:**
   - Keep all application code in shared folders at the root of your project, reserving the `app` directory solely for routing.

   **Store Project Files in Top-Level Folders Inside `app`:**
   - Store application code in shared folders within the root of the `app` directory.

   **Split Project Files by Feature or Route:**
   - Place globally shared application code in the root `app` directory and split specific application code into the route segments that use them.

Next.js provides a range of options for project organization, allowing you to choose a strategy that aligns with your team's preferences and project requirements.

---

# Internationalization

Internationalization, often referred to as i18n, is a critical aspect of building websites that cater to global audiences. In this blog post, we'll explore how Next.js, a popular React framework, simplifies the process of making your web applications multilingual. We'll cover key concepts, routing strategies, localization techniques, and static generation—all with a focus on creating a seamless user experience for users who speak different languages.

**Terminology:**
Before diving into the technical details, let's get familiar with some essential terminology:
- **Locale:** A locale is like a language and region combo. For example, `en-US` stands for English in the United States, while `nl-NL` represents Dutch in the Netherlands. You can also have a more general locale, like `nl` for Dutch without specifying a region.

**Routing Overview:**
The first step in internationalizing your Next.js app is handling routing. Here's a brief overview of how it works:
- Use the user's language preferences to determine their preferred locale.
- Libraries like `@formatjs/intl-localematcher` and `negotiator` can help you select the right locale based on the `Accept-Language` header.
- Internationalize routing by either using sub-paths (e.g., `/fr/products`) or dedicated domains (e.g., `my-site.fr/products`).
- Middleware in Next.js plays a crucial role. You can use it to redirect users to the correct locale if it's missing in the URL path.
- Organize your project files so that special files inside the `app/` directory are nested under `app/[lang]`. This setup enables Next.js to handle different locales in your routes seamlessly.

**Localization:**
Localization involves displaying content in the user's preferred language. Here's how you can implement it:
- Maintain separate "dictionaries" for each locale. These dictionaries are essentially objects that map keys to localized strings.
- For example, you might have `en.json` for English content and `nl.json` for Dutch translations.
- Create a `getDictionary` function to load translations for the requested locale.
- Fetch the appropriate dictionary inside your layouts or pages to display content in the user's selected language.
- The beauty of Next.js is that layouts and pages in the `app/` directory default to Server Components, so you don't have to worry about translation file sizes affecting your client-side bundle. This code runs only on the server, and the resulting HTML is sent to the browser.

**Static Generation:**
To efficiently generate static routes for various locales, follow these steps:
- Use the `generateStaticParams` function in your pages or layouts.
- Define the specific locales for which you want to generate static routes.
- Ensure that the `lang` attribute is correctly set in the resulting HTML to indicate the selected language.

**Conclusion:**
Internationalization is a critical aspect of web development, especially if you're targeting a global audience. Next.js simplifies this process by providing robust support for routing, localization, and static generation. By implementing these strategies, you can create websites that are accessible and user-friendly for people from diverse language backgrounds.

**Resources:**
- Explore additional resources and libraries like `next-intl`, `next-international`, and `next-i18n-router` to enhance your Next.js internationalization efforts.

Internationalizing your Next.js app doesn't have to be daunting. With the right tools and techniques, you can make your website welcoming and accessible to users from around the world.

---