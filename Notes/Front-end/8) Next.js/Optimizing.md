# Optimizing Your Next.js Application for Top Performance and User Experience

When it comes to building web applications with Next.js, optimizing for speed and user experience is paramount. This guide will walk you through the built-in optimizations and best practices that will take your Next.js application to the next level.

## Harnessing Built-in Components

Next.js comes equipped with a powerful set of built-in components designed to simplify the implementation of common UI optimizations. Here are some of the key components:

### Images
Next.js introduces an Image Component that builds on the native `<img>` element. It's designed to supercharge your website's image performance. This component handles lazy loading and automatic image resizing based on the user's device, ensuring that your images are delivered efficiently.

### Link
The Link Component is built on native `<a>` tags but takes performance a step further. It prefetches pages in the background, resulting in faster and smoother page transitions for your users.

### Scripts
Managing third-party scripts can be challenging, but Next.js has you covered with the Script Component. It gives you control over loading and execution, ensuring that your application remains responsive and efficient.

## Enhancing Metadata

Metadata plays a crucial role in helping search engines understand your content better, which can lead to improved SEO. Additionally, it allows you to customize how your content appears on social media platforms, creating a more engaging and consistent user experience.

### Config-based Metadata
You can configure metadata in two ways. First, use the Config-based Metadata approach by exporting a static metadata object or a dynamic generateMetadata function in a `layout.js` or `page.js` file.

### File-based Metadata
Alternatively, you can use File-based Metadata by adding static or dynamically generated special files to route segments. This approach provides flexibility in customizing metadata for different parts of your application.

## Leveraging Static Assets

Next.js makes serving static assets a breeze with its `/public` folder. You can store images, fonts, and other files here. What's more, these files can be cached by Content Delivery Network (CDN) providers, ensuring efficient delivery to your users.

## Analytics and Monitoring

For large-scale applications, understanding how your application performs in the real world is crucial. Next.js seamlessly integrates with popular analytics and monitoring tools, making it easier to gather insights and optimize your application further.

### Analytics
Learn how to integrate analytics tools into your Next.js application by referring to the Analytics guide.

### OpenTelemetry
Explore the OpenTelemetry guide to gain insights into how to monitor and trace your application's performance.

### Instrumentation
The Instrumentation guide provides valuable information on instrumenting your Next.js application for comprehensive performance analysis.

In conclusion, optimizing your Next.js application is a multifaceted process, and this guide has highlighted some of the most effective strategies and built-in tools at your disposal. By implementing these optimizations, you'll not only improve your application's speed but also enhance the overall user experience, making your Next.js project a standout success.


---

# Mastering Image Optimization with Next.js

Images are a crucial part of web content, but they can also be a major contributor to slow-loading websites. In fact, according to the Web Almanac, images often make up a significant portion of a website's page weight and can impact your site's Largest Contentful Paint (LCP) performance. Fortunately, Next.js comes to the rescue with its powerful `next/image` component, which offers a range of features for optimizing your images.

## Why Image Optimization Matters

Before diving into the specifics of Next.js' `next/image` component, it's important to understand why image optimization is essential. In the digital age, where users expect lightning-fast loading times, heavy images can lead to frustratingly slow websites. This, in turn, can result in higher bounce rates and lower search engine rankings.

Image optimization addresses this issue by ensuring that images are appropriately sized, use modern image formats like WebP and AVIF, and load efficiently. Next.js' `next/image` component automates this process, making it easier than ever to achieve optimal image performance.

## Key Features of `next/image`

Next.js' `next/image` component offers several key features to help you optimize your images:

### 1. Size Optimization

`next/image` automatically serves correctly sized images for each device, utilizing modern image formats like WebP and AVIF. This ensures that your website loads quickly and efficiently on various devices.

### 2. Visual Stability

The component prevents layout shifts when images are loading, ensuring a smooth and stable user experience. No more jarring jumps in your page layout due to image loading delays.

### 3. Faster Page Loads

Images are loaded only when they enter the user's viewport, thanks to native browser lazy loading. You can also use optional blur-up placeholders for a polished loading experience.

### 4. Asset Flexibility

`next/image` provides on-demand image resizing, even for images stored on remote servers. This means you can adjust image dimensions as needed without the hassle of pre-processing.

## How to Use `next/image`

Using the `next/image` component in your Next.js project is straightforward. First, import it into your JavaScript or TypeScript file:

```js
import Image from 'next/image'
```

Next, define the `src` attribute for your image, whether it's a local or remote image. Here's how to do it for both cases:

### Local Images

For local images, import the image file and use it in your component:

```jsx
import Image from 'next/image'
import profilePic from './me.png'

export default function Page() {
  return (
    <Image
      src={profilePic}
      alt="Picture of the author"
      // width and height are automatically provided
      // blurDataURL and placeholder are optional
    />
  )
}
```

### Remote Images

When using remote images, provide the `src` as a URL string. Additionally, specify the `width`, `height`, and optional `blurDataURL` manually:

```jsx
import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="https://s3.amazonaws.com/my-bucket/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}
```

To enhance security, you can define a list of supported URL patterns in your `next.config.js` file to ensure only valid images are used.

## Image Sizing

One of the most significant contributors to poor website performance is layout shift caused by images loading. `next/image` addresses this by requiring images to be sized in one of three ways: automatically, explicitly, or implicitly using the `fill` property. This approach prevents layout shifts and ensures a smooth user experience.

## Styling `next/image`

Styling the `next/image` component is similar to styling a standard `<img>` element. Use the `className` or `style` props for styling. However, keep in mind that if you use the `fill` property, the parent element must have `position: relative` and `display: block` for proper rendering.

## Examples

The `next/image` component offers various usage examples, including responsive images, images filling containers, and background images. You can find detailed code examples and demos in the official [Image Component Demo](https://image-component.nextjs.gallery).

## Configuration

For advanced users, `next/image` and Next.js Image Optimization can be configured further in the `next.config.js` file. This allows you to customize image breakpoints, change caching behavior, enable remote images, and more. Check out the [full image configuration documentation](/docs/app/api-reference/components/image#configuration-options) for detailed information on customization options.

In conclusion, Next.js' `next/image` component is a powerful tool for optimizing images and improving website performance. Whether you're working with local or remote images, this component simplifies the process and ensures that your web pages load quickly and smoothly, providing an excellent user experience.

---

# Font Optimization

In the world of web development, optimizing your application's fonts is crucial for enhancing both performance and privacy. In this article, we'll dive into the power of `next/font`, a built-in feature that automates font optimization, including custom fonts. Say goodbye to unnecessary network requests and hello to faster loading times and improved privacy.

**Automatic Self-Hosting for Any Font**

One of the standout features of `next/font` is its automatic self-hosting capability. This means you can load web fonts with minimal layout shift, thanks to the CSS `size-adjust` property used under the hood. Plus, it allows you to use Google Fonts without sending any requests to Google from the browser.

**Using Google Fonts with `next/font`**

Integrating Google Fonts is a breeze with `next/font`. CSS and font files are downloaded during the build process and self-hosted alongside your other static assets. This means no more browser requests to Google. To get started, import the font you want to use from `next/font/google`. We recommend exploring variable fonts for optimal performance and flexibility.

**Font Implementation in Your Application**

Depending on your font choice, you might need to specify a font weight. If you're using a variable font, you can skip this step. For non-variable fonts, ensure you specify the weight as required.

**App-Wide Font Usage**

To apply the font across all your pages, simply add it to your `_app.js` file under `/pages`. Again, consider using a variable font for better performance.

**Page-Specific Font Usage**

For fonts used on individual pages, import and apply them directly to the specific page. This gives you fine-grained control over your fonts.

**Specifying Font Subsets**

`next/font` automatically subsets Google Fonts to reduce file size and improve performance. Make sure to specify the subsets you want to preload when using the `preload` option.

**Using Multiple Fonts**

You're not limited to a single font. You can import and use multiple fonts in your application. There are two approaches you can take: exporting font functions and importing them where needed or using CSS variables with your preferred CSS solution.

**Local Fonts**

If you have local fonts, import them using `next/font/local` and specify the `src` of your local font file. Variable fonts are recommended for their performance and flexibility.

**Integration with Tailwind CSS**

`next/font` can seamlessly integrate with Tailwind CSS through CSS variables. Define your CSS variable names and apply them to your HTML document. In your Tailwind CSS configuration, use these variables to style your elements with the desired fonts.

**Preloading Fonts**

Fonts loaded using `next/font` are preloaded only on related routes based on the file where they are used. Understand how fonts are preloaded on unique pages, layouts, and root layouts to optimize your font loading strategy.

**Reusing Fonts**

To prevent multiple instances of the same font from being hosted in your application, call the font loader function in one shared file, export it as a constant, and import this constant in other files where you want to use the same font.

With `next/font`, optimizing and managing fonts in your web application becomes a breeze, ensuring a smoother and more privacy-conscious user experience.

---

# Scripts


## Layout Scripts

Let's start with a common scenario: you want to load a third-party script for multiple routes. To achieve this, import the `next/script` module and include the script directly in your layout component. Here's how you can do it in TypeScript and JavaScript:

```tsx
import Script from 'next/script'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section>{children}</section>
      <Script src="https://example.com/script.js" />
    </>
  )
}
```

The beauty of this approach is that the third-party script will be fetched when any route within the layout (e.g., `dashboard/page.js`) or any nested route is accessed. Even if a user navigates between multiple routes within the same layout, Next.js ensures that the script loads only once.

## Application Scripts

If you need a third-party script to be loaded for all routes in your application, you can include it in your root layout. Here's how you can do it:

```tsx
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script src="https://example.com/script.js" />
    </html>
  )
}
```

Similarly, this script will load and execute when any route in your application is accessed, and it will load only once, regardless of how many pages you navigate to.

> **Recommendation**: It's advisable to include third-party scripts only in specific pages or layouts to minimize any unnecessary impact on performance.

## Script Loading Strategies

Next.js provides several script loading strategies to fine-tune the behavior of the `next/script` component:

- `beforeInteractive`: Load the script before any Next.js code and before any page hydration occurs.
- `afterInteractive` (default): Load the script early but after some hydration on the page occurs.
- `lazyOnload`: Load the script later during browser idle time.
- `worker` (experimental): Load the script in a web worker.

You can explore these strategies and their use cases in detail in the [`next/script` API reference documentation](/docs/app/api-reference/components/script#strategy).

## Offloading Scripts To A Web Worker (Experimental)

For advanced users, there's an experimental feature that allows scripts to be offloaded and executed in a web worker using [Partytown](https://partytown.builder.io/). This can potentially improve your site's performance by freeing up the main thread for other tasks.

To enable this feature, you need to set the `nextScriptWorkers` flag to `true` in your `next.config.js`:

```js
module.exports = {
  experimental: {
    nextScriptWorkers: true,
  },
}
```

After enabling the flag, running `next` will guide you through the installation of the required packages to set up Partytown. Once configured, you can use the `strategy="worker"` attribute with the `next/script` component to offload a script to a web worker.

```tsx
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script src="https://example.com/script.js" strategy="worker" />
    </>
  )
}
```

However, be cautious when using this strategy, as it involves trade-offs. You can find more information about these trade-offs in Partytown's [trade-offs documentation](https://partytown.builder.io/trade-offs).

## Inline Scripts

The Script component also supports inline scripts, which are JavaScript snippets not loaded from an external file. You can write inline scripts either within curly braces or by using the `dangerouslySetInnerHTML` property. However, remember to assign an `id` property to inline scripts for Next.js to track and optimize them properly.

## Executing Additional Code

You can use event handlers with the Script component to execute additional code at specific points in the script's lifecycle. There are three event handlers available:

- `onLoad`: Execute code after the script has finished loading.
- `onReady`: Execute code after the script has finished loading and every time the component is mounted.
- `onError`: Execute code if the script fails to load.

These event handlers work when `next/script` is used inside a [Client Component](/docs/app/building-your-application/rendering/client-components) where `"use client"` is defined as the first line of code. This allows you to have precise control over when and how additional code is executed.

## Additional Attributes

Finally, you can assign additional DOM attributes to the `<script>` element when using the Script component. These attributes, like `nonce` or custom data attributes, will automatically be forwarded to the final optimized `<script>` element included in the HTML.

In summary, Next.js's built-in Script component offers powerful tools for optimizing and managing third-party scripts in your web application. Whether you need to load scripts for specific routes, fine-tune loading behavior, or offload scripts to web workers, Next.js has you covered. Make the most of these features to enhance your application's performance while maintaining control and flexibility.


---

# Metadata

Discover how to use Next.js Metadata API to define metadata for improved SEO and web shareability. Explore two approaches: config-based metadata and file-based metadata, and understand their behavior and prioritization.

Next.js offers a robust Metadata API that empowers you to define essential application metadata, such as `meta` and `link` tags within the HTML `head` element. This metadata plays a crucial role in enhancing your website's search engine optimization (SEO) and shareability on social media platforms.

## Config-based Metadata

Next.js provides two methods for adding metadata to your application:

1. **Config-based Metadata**: You can export a static `metadata` object or a dynamic `generateMetadata` function in your `layout.js` or `page.js` files. This approach allows you to define metadata for your routes.

   - To define static metadata, export a `Metadata` object from a file:

     ```jsx
     export const metadata = {
       title: '...',
       description: '...',
     }
     ```

   - For dynamic metadata that requires fetching data, use the `generateMetadata` function:

     ```tsx
     export async function generateMetadata({ params, searchParams }, parent) {
       // Fetch data and generate metadata
     }
     ```

   Config-based metadata can be static or dynamically generated, offering flexibility to tailor your metadata to specific routes and content.

## File-based Metadata

File-based metadata allows you to define metadata through special files for specific route segments. These files have a higher priority than config-based metadata and will override it.

Some common special files for metadata include:

- Icons like `favicon.ico`, `apple-icon.jpg`, and `icon.jpg`
- Social media image files such as `opengraph-image.jpg` and `twitter-image.jpg`
- `robots.txt` for defining web crawler behavior
- `sitemap.xml` for search engine optimization

You can use these files to define static metadata or generate them programmatically with code.

## Metadata Behavior

Understanding metadata behavior is crucial to managing and optimizing your application's metadata effectively:

- File-based metadata takes precedence over config-based metadata, and it will override any config-based metadata for the same route.
- Next.js automatically adds two default `meta` tags to every page: one for character encoding and another for setting the viewport width and scale for responsive design.
- Metadata is evaluated in order, starting from the root segment down to the segment closest to the final `page.js` segment. This allows for flexible metadata customization.
- Metadata objects exported from multiple segments in the same route are shallowly merged, with duplicate keys being replaced based on their ordering. You can share some nested fields between segments while overwriting others by separating them into separate variables.

## Dynamic Image Generation

Next.js introduces the `ImageResponse` constructor for generating dynamic images using JSX and CSS. This feature is useful for creating social media images like Open Graph images and Twitter cards.

To use `ImageResponse`, import it from `next/server` and create dynamic images using JSX and CSS. You can integrate `ImageResponse` with other Next.js APIs, such as Route Handlers and file-based Metadata, to generate images at build time or request time.

## JSON-LD for Structured Data

JSON-LD (JavaScript Object Notation for Linked Data) is a format for structured data that enhances your website's search engine visibility. You can use JSON-LD to describe various types of entities, such as products, events, organizations, and more.

Next.js recommends rendering structured data as a `<script>` tag in your `layout.js` or `page.js` components. This allows search engines to understand your content and improve your website's search results.

By following these guidelines and leveraging Next.js's Metadata API, you can take control of your application's metadata, optimize it for SEO, and ensure your website looks great when shared on social media platforms.


---

# Static Assets 

Learn how Next.js handles static files, such as images, in the public directory. Uncover the ins and outs of serving these assets for your web application.

Next.js makes it a breeze to serve static files, including images, by utilizing a special folder called `public` in the root directory of your project. This feature simplifies the process of including static assets in your web application and allows you to reference them effortlessly using the base URL (`/`).

### Serving Images from the `public` Folder

Let's dive into a practical example. Suppose you want to include an image named `me.png` in your project. By placing this image inside the `public` folder, you can easily access it in your code like this:

```jsx
import Image from 'next/image'

export function Avatar() {
  return <Image src="/me.png" alt="me" width="64" height="64" />
}
```

This straightforward approach streamlines the inclusion of images, making your code cleaner and more organized.

#### More Than Just Images

The `public` folder isn't limited to images; it can serve a variety of static files, including:

- `robots.txt` for controlling web crawler behavior.
- `favicon.ico` for specifying your website's favicon.
- Google Site Verification files.
- And any other static files, including `.html` files.

However, it's crucial to avoid naming conflicts. Make sure no static file shares its name with a file in the `pages/` directory to prevent errors. If such conflicts arise, Next.js will handle them gracefully.

### Special Metadata Files

While the `public` folder is ideal for many static assets, there are exceptions, especially when dealing with metadata files like `robots.txt` and `favicon.ico`. For these types of files, consider using [special metadata files](/docs/app/api-reference/file-conventions/metadata) within the `app` folder.

These metadata files offer more control and organization for specific metadata-related tasks, ensuring that your web application adheres to best practices.

#### Important Considerations

Here are some key points to keep in mind when working with static assets in Next.js:

1. **Directory Name**: The directory housing your static assets must be named `public`. This name is non-negotiable, and Next.js recognizes it as the sole directory for serving static assets.

2. **Build Time Serving**: Only assets present in the `public` directory at [build time](/docs/app/api-reference/next-cli#build) will be served by Next.js. Files added at request time won't be available through this mechanism. If you require persistent file storage, consider employing a third-party service like [AWS S3](https://aws.amazon.com/s3/).

By mastering the art of serving static assets in Next.js, you'll enhance your web application's performance, organization, and user experience. So go ahead, leverage the `public` folder and streamline your static file management today!


---

# Lazy Loading

Discover the power of lazy loading in Next.js to boost your application's initial loading performance. Dive into dynamic imports, `next/dynamic`, and more.

Lazy loading in Next.js is a game-changer for optimizing your application's loading performance. It's a technique that reduces the initial amount of JavaScript needed to render a route, resulting in faster loading times. Let's explore how it works and the ways you can implement it.

### Why Lazy Loading Matters

Lazy loading allows you to defer the loading of certain parts of your application until they are actually needed. This can significantly improve the user experience, especially in scenarios where you have large JavaScript bundles or components that aren't required right away.

There are two main methods for implementing lazy loading in Next.js:

### 1. Using `next/dynamic`

`next/dynamic` is a powerful tool that combines the best of `React.lazy()` and Suspense. It works seamlessly in both the `app` and `pages` directories, making it an excellent choice for incremental migration.

### 2. Using `React.lazy()` with Suspense

If you're familiar with React's `React.lazy()` and Suspense, you can employ this approach for lazy loading in Next.js. It's a versatile option, especially when working with existing React components.

### Lazy Loading with `next/dynamic`

Let's delve into some examples of how to use `next/dynamic` for lazy loading:

#### Importing Client Components

```jsx
import { useState } from 'react'
import dynamic from 'next/dynamic'

// Client Components:
const ComponentA = dynamic(() => import('../components/A'))
const ComponentB = dynamic(() => import('../components/B'))
const ComponentC = dynamic(() => import('../components/C'), { ssr: false })

export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div>
      {/* Load immediately, but in a separate client bundle */}
      <ComponentA />

      {/* Load on demand, only when/if the condition is met */}
      {showMore && <ComponentB />}
      <button onClick={() => setShowMore(!showMore)}>Toggle</button>

      {/* Load only on the client side */}
      <ComponentC />
    </div>
  )
}
```

#### Skipping Server-Side Rendering (SSR)

By default, Client Components using `React.lazy()` and Suspense will be pre-rendered (SSR). If you want to disable pre-rendering for a specific Client Component, you can use the `ssr` option with a value of `false`.

#### Importing Server Components

Dynamically importing a Server Component will result in the lazy loading of only the Client Components that are children of the Server Component, not the Server Component itself.

#### Loading External Libraries

You can also employ lazy loading for external libraries. In this example, we use the `import()` function to load the `fuse.js` library for fuzzy search only when the user interacts with the search input.

#### Custom Loading Components

Custom loading components can enhance the user experience while waiting for lazy-loaded components to load. You can specify a loading component to be displayed during the loading process.

### Lazy Loading with `React.lazy()` and Suspense

If you prefer using `React.lazy()` and Suspense, Next.js fully supports this approach as well. Here's a brief overview:

#### Named Exports

You can dynamically import a named export by returning it from the Promise returned by the `import()` function. This allows you to selectively load specific exports from a module.

#### No Server-Side Rendering

Similar to `next/dynamic`, you can disable server-side rendering (SSR) for a component by setting the `ssr` option to `false`. This is useful when dealing with components that rely on browser APIs like `window`.

#### Loading External Libraries

The `import()` function is a powerful tool for lazy loading external libraries, improving your application's loading performance.

### Considerations and Best Practices

As you explore lazy loading in Next.js, keep these important points in mind:

- **Explicit Paths**: When using `import('path/to/component')`, the path must be explicitly written and cannot be a template string or variable. Additionally, the `import()` function must be inside the `dynamic()` call for proper preloading.

By harnessing the magic of lazy loading in Next.js, you can dramatically enhance your application's loading performance, making it more efficient and user-friendly. So, whether you opt for `next/dynamic` or stick with `React.lazy()` and Suspense, your users will thank you for the smoother experience.

---


# Analytics

Leverage Next.js Speed Insights to measure and improve your application's performance. Explore real experience scores, web vitals, and custom metrics.

In the world of web development, performance matters, and that's where Next.js Speed Insights comes into play. This powerful tool allows you to analyze and measure your application's performance using a variety of metrics. Let's dive into how you can harness its capabilities to optimize your Next.js application.

### Real Experience Score Made Easy

With Next.js Speed Insights, you can effortlessly start collecting your Real Experience Score. This metric, which is crucial for understanding user experience, can be obtained with zero-configuration on Vercel deployments. It's an excellent way to gain insights into how your users perceive your application's performance.

But what exactly does Next.js Speed Insights measure, and how can you use it to your advantage? Let's break it down.

### Built-in Relayer

Next.js Speed Insights relies on a built-in relayer that helps you measure and track various performance metrics. Whether you're using the default setup or customizing your analytics approach, this tool has you covered.

#### Building Your Custom Analytics

To tailor your analytics approach, you'll need to create a custom `App` component and define a `reportWebVitals` function. Here's how you can do it:

```jsx
// pages/_app.js
export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

The `reportWebVitals` function gets triggered when the final values for performance metrics finish calculating on a page. You can use it to log results to the console or send them to a specific endpoint.

#### Understanding Metrics

Metrics come in two flavors:

##### Web Vitals

Web Vitals are a set of metrics that capture the user experience of a web page. They include:

- Time to First Byte (TTFB)
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- Interaction to Next Paint (INP) (experimental)

You can handle these metrics using the `web-vital` label:

```js
export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric)
  }
}
```

##### Custom Metrics

In addition to web vitals, there are custom metrics that measure the time it takes for a page to hydrate and render. These include:

- Next.js-hydration: Hydration time (ms)
- Next.js-route-change-to-render: Time from route change to rendering (ms)
- Next.js-render: Rendering time after a route change (ms)

You can manage these custom metrics using the `custom` label:

```js
export function reportWebVitals(metric) {
  if (metric.label === 'custom') {
    console.log(metric)
  }
}
```

#### Sending Results to External Systems

To gain deeper insights, you can send your performance results to external systems. Here's an example of how to send them to a custom endpoint:

```js
export function reportWebVitals(metric) {
  const body = JSON.stringify(metric)
  const url = 'https://example.com/analytics'

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body)
  } else {
    fetch(url, { body, method: 'POST', keepalive: true })
  }
}
```

If you use Google Analytics, you can leverage the `id` value to construct custom metric distributions and calculate percentiles, enhancing your performance tracking capabilities.

### TypeScript Support

If you're using TypeScript, Next.js Speed Insights provides built-in type support for `NextWebVitalsMetric`, making it easier to work with performance data.

### Wrapping Up

Optimizing your Next.js application's performance is a crucial step in providing a seamless user experience. Next.js Speed Insights empowers you to measure and track your application's performance effortlessly, helping you identify areas for improvement. By customizing your analytics approach and leveraging web vitals and custom metrics, you can gain valuable insights into your application's performance and make data-driven decisions to enhance user satisfaction.

---

