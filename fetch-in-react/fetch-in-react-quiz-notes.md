# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
  useEffect can be used to load data for a component by specifying a callback function inside it. This callback function is executed when the component mounts (initial render) or when any of the specified dependencies in the dependency array change. You can use the fetch function or any other method to make HTTP requests inside the useEffect callback and update the component's state or perform other actions based on the fetched data.

- What browser function can be used to make HTTP requests to a server in React?
  In React, you can use the fetch function, which is a built-in browser function, to make HTTP requests to a server. The fetch function allows you to send HTTP requests and handle the responses. It returns a promise that resolves to the response object.

- How do you use `useEffect` to load component data just once when the component mounts?
  To load component data just once when the component mounts, you can pass an empty dependency array ([]) as the second argument to useEffect. This ensures that the effect runs only once, after the initial render.

- How do you use `useEffect` to load component data every time the data key changes?
  To load component data every time the data key changes, you can include the data key as a dependency in the dependency array of useEffect. Whenever the data key changes, the effect will run again.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  Manage all your data accesses with a third-party data management library. Some good open source packages are React Query and Vercel SWR work.

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
