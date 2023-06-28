# react-form-controls-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do controlled components differ from uncontrolled components?
  Uncontrolled takes form data from the DOM directly while controlled components take form data per render.
  Uncontrolled is simpler to manage while controlled have a longer setup.

- What are some advantages of using uncontrolled components?

  1. Full control over form data: You have complete control over the form data, allowing for easy manipulation, validation, and integration with other components or state management libraries.
  2. Enhanced interactivity: Controlled components allow for fine-grained control and enable complex interactions with form inputs.
  3. Improved data consistency: The form data is stored in the component's state, ensuring that the data is consistent with the component's rendering.

- What are some advantages of using controlled components?

  1. Simplicity: Uncontrolled components require less code and can be simpler to implement, especially for simple forms or when you want to delegate form handling to the browser.
  2. Integration with non-React libraries: Uncontrolled components are useful when integrating with third-party libraries that expect standard HTML form behavior.

- Which style do you prefer?
  Controlled

- What two props must you pass to an input for it to be "controlled"?

  1. value: This prop sets the current value of the input field based on the component's state.
  2. onChange: This prop specifies the event handler to be called when the value of the input changes. It allows you to update the component's state with the new value.

- What are some popular npm packages for creating forms in React?
  Formik, react hook form, redux-form, final form

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
