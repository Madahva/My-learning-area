# Web Vitals

Web Vitals is an initiative created by Google to provide unified guidance and metrics to measure end-user page experience on the web.

Core Web Vitals is a subset of Web Vitals, and currently consists of three metrics that measure loading, interactivity, and visual stability. These metrics are Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).

Achieving a great score in these three metrics will create a smoother website experience for your users.

Websites scoring poorly in each of the Core Web Vitals metrics will impact its search engine ranking as Google starts to use Core Web Vitals as a ranking factor for their search algorithm. Poor vitals can have an impact on your web traffic and business.

**Core Web Vitals focus on aspects of the user experience via loading performance (Largest Contentful Paint), interactivity (First Input Delay), and visual stability (Cumulative Layout Shift).**

## Largest Contentful Paint (LCP)

The Largest Contentful Paint (LCP) metric looks at the loading performance of your page. LCP measures the time it takes to get the largest element on the page visible within the viewport. This could be a large text block, video, or image that takes up the primary real estate on the page.

As the DOM is rendered, the largest element on the page may change. The Largest Contentful Paint doesn't stop counting until the largest image or element is seen on-screen.


## First Input Delay (FID)

The **First Input Delay (FID)** metric is the perception of an end user’s experience while interacting with a web page. Imagine clicking inside an input box only for nothing to happen – this frustration with the interactivity and responsiveness of a site is caused by large input delays.

FID requires real user data and cannot be measured in the lab (e.g. Google Lighthouse). However, the [Total Blocking Time (TBT)](https://web.dev/tbt) metric is lab-measurable and captures issues that affect interactivity.


## Cumulative Layout Shift (CLS)

The **Cumulative Layout Shift (CLS)** metric is a measure of your site’s overall layout stability. A site that unexpectedly shifts layout as the page loads can lead to accidental user error and distraction.

Cumulative Layout Shift (CLS) occurs when elements have been shifted after initially being rendered by the DOM. Here, a button was rendered to the screen after the text block, causing the block to shift downward. A combination of impact and distance is considered when calculating CLS.

Each element’s individual layout shift score is only counted toward CLS if unexpected movement occurs. If a new element is added to the DOM or an existing element changes size, it doesn’t count toward layout shift if the loaded elements maintain their position.

## SEO Impact

The main objective of Google's search engine is to give users the best results possible while taking localization and misspellings into account. In every case, Google cares about giving users a fast and smooth result with great website experience.

### UX Impact

Most conversations around Core Web Vitals are primarily focused on SEO.

While it's true that Core Web Vitals are an initiative designed to measure and push the improvement of page experience and search ranking, it's the users who ultimately benefit from these changes.

---

Lighthouse works by running a series of audits on a provided URL. Based on these audits, it generates a report on how well the page performed. If there are areas that need improvement, the report will provide insight on how to improve.