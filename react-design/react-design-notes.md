# react-design-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the phases in the React design process?
  Initialization: The component is being created with its initial state and props.
  Mounting: The component is added to the DOM and rendered.
  Updating: The component re-renders when its props or state change.
  Unmounting: The component is removed from the DOM.

- How does data flow in React?

  1. Data flows in a unidirectional manner, following a top-down or parent-to-child flow.
  2. The parent component passes data (props) down to its child components.
  3. Child components receive and consume the data passed to them through props.
  4. If the child components need to modify the data or communicate with their parent, they can do so by invoking callback functions passed as props.

- How can children components modify state in their parents?
  1. Child components cannot directly modify the state of their parent components.
  2. To modify the state of a parent component, the parent component needs to pass down a callback function to the child component through props.
  3. The child component can then invoke this callback function with the necessary data as arguments.
  4. Inside the callback function defined in the parent component, the parent can modify its state using the provided data.
  5. This way, the child component indirectly triggers a state update in its parent by invoking the callback function.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
