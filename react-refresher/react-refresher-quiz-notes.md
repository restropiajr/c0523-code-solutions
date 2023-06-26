# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  To define a react component, you can use the following syntax. The component needs to have capital letter in the beginning of the name.
  export default MyComponent() {
  return <><>
  }

- How do you use JSX in a React component?
  You insert HTML elements and tags inside the component with a return

- How do you declare the props a React component needs?
  You declared the props as parameters for the component.

- How do you pass props to a React component?
  You pass the props to a react component by making them an attribute when rendering the component.

- How do you include JavaScript expressions in JSX?
  {}

- What are React hooks and what are the three "Rules of Hooks"?
  React hooks are functions that provide a simpler way to manage state and lifecyle in functional components.

  1. Only call hooks at the top level
  2. Only call hooks from React function components
  3. Hooks must be called in the same order for rendering

- How do you manage state in a React component?
  useState hook

- How do you handle events in React?
  Attach event handlers to events

- How do you let a parent component know that an event happened?
  To let a parent component know that an event happened in a child component, you can pass a callback function as a prop from the parent component to the child component.

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
