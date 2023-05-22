# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  We log things to the console in order to output information for debugging and checking if the code works as intended.

- What is a "model"?
  A model is a representation of a system.

- Which "document" is being referred to in the phrase Document Object Model?
  The "document" that is being referred to in the phrase Document Object Model is the HTML/XML document that is being displayed in a web browser.

- What is the word "object" referring to in the phrase Document Object Model?
  The word "object" referring to in the phrase Document Object Model is the root object window.

- What is a DOM Tree?
  A DOM tree is a hierarchical representation of the elements in an HTML or XML document. It is created by the web browser when it loads the document and is used by DOM to manipulate the document's content, structure, and style. The DOM tree consists of nodes (elements, attributes, text).

- Give two examples of `document` methods that retrieve a single element from the DOM.
  Two examples of 'document' methods that retrieve a single element from the DOM are:

  1. getElementsById
  2. querySelector()

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  One example of a 'document' method that retrieves multiple elements from the DOM at once is querySelectorAll().

- Why might you want to assign the return value of a DOM query to a variable?
  You might want to assign the return value of a DOM query to a variable because it makes it easier to manipulate the elements via JavaScript.

- What `console` method allows you to inspect the properties of a DOM element object?
  The 'console' method that allows you to inspect the properties of a DOM element object is console.dir.

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  A `<script>` tag need to be placed at the bottom of the HTML content instead of at the top because a browser parses the HTML content from top to bottom. If it encounters the script tag, it will execute the script tag first and then the rest of the HTML document.

- What does `document.querySelector()` take as its argument and what does it return?
  `document.querySelector()` takes a specified CSS selector and would return the first element of the CSS selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  `document.querySelectorAll()` takes a specified CSS selector and would return all the elements of the CSS selector.

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
