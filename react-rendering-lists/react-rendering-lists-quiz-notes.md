# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  Dynamically creating a list of React components is useful when you have a variable number of elements that need to be rendered based on some data or logic. Instead of hard-coding the components in your JSX code, you can dynamically generate them based on the current state or props of your component.

- Why is it important for React components to be data-driven?
  React components are typically data-driven because they are designed to be reusable and flexible. By passing data as props to components, you can easily update and manipulate their behavior and appearance based on the input data.

- Where in the component code would a list of React components typically be built?
  A list of React components is typically built within the render method of a component. In the render method, you can use JavaScript logic to iterate over an array of data and generate an array of React components. This array can then be rendered within the JSX code.

- What `Array` method is commonly used to create a list of React components?
  You can use map to iterate over an array of data and return an array of corresponding React components.

- Why do components in a list need to have unique keys?
  Components in a list need to have unique keys to help React efficiently update and re-render the list when changes occur. The key prop provides a unique identifier for each component in the list. React uses these keys to keep track of which components have changed, been added, or been removed.

- What is the best value to use as a "key" prop when rendering lists?
  The best value to use as a "key" prop when rendering lists is a stable and unique identifier associated with each item in the list. Ideally, you should use a unique ID or a combination of values that uniquely identify each item.

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
