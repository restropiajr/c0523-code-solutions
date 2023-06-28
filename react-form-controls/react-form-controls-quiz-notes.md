# react-form-controls-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do controlled components differ from uncontrolled components?
  Controlled components: In controlled components, the value of the input field is controlled by React state. Whenever the value of the input changes, the state is updated, and the component is re-rendered with the new value. To set the value of the input field, you need to explicitly handle the onChange event and update the state.

  Uncontrolled components: In uncontrolled components, the value of the input field is handled by the DOM itself. The value of the input is accessed through the DOM using refs or other methods, rather than being controlled by React state. Uncontrolled components do not require explicit event handling or state management for every input change.

- What are some advantages of using uncontrolled components?
  Simplicity: Uncontrolled components require less code and are generally simpler to implement.
  Better performance: Since there is no state management involved, uncontrolled components can be faster in certain scenarios.

- What are some advantages of using controlled components?
  Full control: Controlled components provide a centralized way to manage and validate form input data.
  Validation and error handling: With controlled components, you can easily validate and handle errors before submitting the form.
  Easy access to form data: Since the form data is controlled by React state, it is readily available for processing or sending to an API.

- Which style do you prefer?
  Controlled

- What two props must you pass to an input for it to be "controlled"?
  Value
  onChange

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
