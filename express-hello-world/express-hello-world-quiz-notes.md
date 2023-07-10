# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  Express middleware refers to functions or sets of functions that are executed during the request-response lifecycle of an Express application. These functions have access to the request (req) and response (res) objects and the next function. Middleware functions can modify the request and response, perform additional processing, or pass control to the next middleware function.

- What is Express middleware useful for?
  Express middleware is useful for adding functionality to the request-response cycle of an Express application. It allows you to handle common tasks such as parsing request bodies, handling authentication, logging requests, adding headers, error handling, and more. Middleware functions act as a bridge between the server and the application logic, providing a way to customize and extend the behavior of your application.

- How do you mount a middleware with an Express application?
  In Express, you can mount middleware using the use() method of the Express application object (app). The use() method is used to add middleware functions to the middleware stack. Middleware can be mounted at the application level or the route level.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  An Express application passes three objects to the middleware functions to manage the request/response lifecycle:
  1. req (request): This object represents the incoming HTTP request and contains information such as headers, query parameters, URL, and request body. Middleware functions can access and modify this object to extract data or perform operations on the request.
  2. res (response): This object represents the HTTP response that will be sent back to the client. Middleware functions can use this object to set response headers, send the response body, and manage the response status.
  3. next: This is a callback function provided by Express. It is used to pass control to the next middleware function in the stack. By calling next(), the current middleware function hands off the request/response to the next middleware in the chain. If next() is not called, the request will not proceed to the next middleware or route handler, and the response may not be sent back to the client.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
