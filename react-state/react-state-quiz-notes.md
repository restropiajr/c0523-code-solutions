# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks in React are functions that allow you to use state and other React features in functional components. They provide a way to add and manage stateful behavior in React components without the need for class components.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Only Call Hooks at the Top Level: Hooks should be called only at the top level of a functional component or from other custom hooks. They should not be called inside loops, conditions, or nested functions.
  Only Call Hooks from React Functions: Hooks should be called from within React functional components or from custom hooks. They should not be called from regular JavaScript functions.

- What is the purpose of state in React?
  The purpose of state in React is to store and manage mutable data within a component. State allows components to keep track of data that can change over time and triggers a re-render of the component whenever the state is updated. This enables dynamic and interactive UIs in React applications.

- Why can't we just maintain state in a local variable?
  Local variables do not trigger component re-renders when they are updated.

- What two actions happen when you call a `state setter` function?

  1. The new value you pass to the setter function replaces the previous state value. React internally keeps track of the state changes for each component.
  2. React schedules a re-render of the component in order to reflect the updated state in the UI. This re-rendering process ensures that the component and its children are updated with the latest state values.

- When does the local `state variable` get updated with the new value?
  The local state variable gets updated with the new value during the next render of the component. After the state is updated, the component re-renders with the updated state value, and the local state variable reflects the new value assigned to it.

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
