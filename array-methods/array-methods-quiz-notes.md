# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:
  - What does `Array.forEach` do?
    Array.forEach is a method that iterates over each element in an array and executes a provided callback function for each element.
  - What should the callback function do?
    The callback function provided to Array.forEach takes three parameters: the current element being iterated, the index of the current element, and the array itself. The callback function can perform any desired operation on the element or use the index or the array if needed.
  - What is `Array.forEach` useful for?
    Array.forEach is useful when you want to perform an operation on each element of an array without creating a new array. It is commonly used for executing side effects, such as logging values to the console, updating the DOM, or modifying external variables.
- `Array.map`:
  - What does `Array.map` do?
    Array.map is a method that creates a new array by iterating over each element in an existing array and applying a provided callback function to each element. It returns a new array containing the results of applying the callback function to each element.
  - What should the callback function return?
    The callback function provided to Array.map should return a value that will be added to the new resulting array. This value represents the transformed or mapped value of the original element.
  - What is `Array.map` useful for?
    Array.map is useful when you want to transform each element of an array into a new value and create a new array with the transformed values. It is commonly used to perform data transformations, such as extracting specific properties from objects, converting data formats, or applying calculations to each element.
- `Array.filter`:
  - What does `Array.filter` do?
    Array.filter is a method that creates a new array by iterating over each element in an existing array and filtering out elements that do not meet a certain condition specified by a provided callback function. It returns a new array containing only the elements that pass the condition.
  - What should the callback function return?
    The callback function provided to Array.filter should return a Boolean value (true or false) indicating whether to keep or exclude the element from the resulting array. If the callback function returns true, the element will be included in the new array. If it returns false, the element will be excluded.
  - What is `Array.filter` useful for?
    Array.filter is useful when you want to create a new array that contains only the elements that satisfy a specific condition. It is commonly used for filtering out unwanted elements from an array, such as removing duplicates, excluding values based on a certain criterion, or selecting elements that match a specific pattern or property.

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
