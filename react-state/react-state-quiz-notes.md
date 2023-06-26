# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks are functions that allow you to use state and other React features in functional components. They are a way to add stateful behavior to functional components, which were previously stateless.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

  1. Hooks should only be used at the top level of a React functional component or custom hook. They should not be called inside loops, conditions, or nested functions.
  2. Hooks should be called in the same order every time a component renders. This ensures that React can correctly associate hooks with their respective states.
  3. Custom hooks should be named with a "use" prefix to indicate that they follow the rules of hooks.

- What is the purpose of state in React?
  The purpose of state in React is to store and manage data that can change over time. It allows components to keep track of information and trigger re-rendering when that information is updated.

- Why can't we just maintain state in a local variable?
  When a local variable is used, React doesn't associate that value with the component's state, so it won't trigger re-renders when the value changes.

- What two actions happen when you call a `state setter` function?

  1. The state value you pass as an argument to the setter function is updated to the new value.
  2. React schedules a re-render of the component in which the state is being updated. This triggers the component to reflect the new state in its rendered output.

- When does the local `state variable` get updated with the new value?
  The local state variable in React gets updated with the new value during the next render of the component.

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
