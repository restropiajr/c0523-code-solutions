# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  No, it creates a new element.

- How do you add an element as a child to another element?
  appendChild()

- What do you pass as the arguments to the `element.setAttribute()` method?
  attribute, value

- What steps do you need to take in order to insert a new element into the page?

  1. Create element use document.createElement().
  2. Assign class, attributes etc.
  3. Insert it under an element use appendChild.

- What is the `textContent` property of an element object for?
  Gives access to ALL the written text content inside the element.

- Name two ways to set the `class` attribute of a DOM element.

  1. node.className = 'class'
  2. node.setAttribute('class', 'value');

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  1. Reusability in which the function can be used again within the code.
  2. Makes reading the code easier and very straight forward

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
