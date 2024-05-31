## Waterfalling (Interview Questions)
![alt text](images/image3.png)


## Some fact about nextJs
![alt text](image/image4.png)

## What is Hydration in Next.js?

Hydration is the process where the client-side JavaScript takes over the static HTML that was rendered by the server. In a server-side rendered (SSR) application like those built with Next.js, the HTML is initially rendered on the server and sent to the client. When the client receives this HTML, it "hydrates" it by attaching event listeners and making it interactive using JavaScript. This process makes the server-rendered static HTML interactive without having to re-render everything from scratch on the client side.

### Common Causes of Hydration Errors

1. Conditional Rendering Based on Browser-only APIs: If you have code that runs differently on the client (browser) than on the server, such as code that relies on window, document, or localStorage, it can lead to discrepancies.

2. Differences in Data Fetching: If data fetching happens differently on the server versus the client, it can result in mismatched HTML.

3. Time-based Rendering: Components that render differently based on the current time (e.g., using Date.now()) can cause hydration issues because the server-rendered HTML will have a different timestamp than the client-rendered HTML.

4. Asynchronous Data Handling: If the component renders initially with some placeholder and then updates with real data on the client, it can cause a mismatch.