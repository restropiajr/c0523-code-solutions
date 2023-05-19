# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
  The default value for the position property of HTML elements is static.

- How does setting `position: relative` on an element affect document flow?
  The setting position: relative on an element affects the document flow by not removing it from the document flow. It introduces a new positioning context for the element, allowing the position to by modified.

- How does setting `position: relative` on an element affect where it appears on the page?
  The setting position relative on an element affects where it appears on the page by allowing the position to be changed relative to its normal position in the document flow.

- How does setting `position: absolute` on an element affect document flow?
  The setting position: absolute on an element affects the document flow by removing it from the document flow.

- How does setting `position: absolute` on an element affect where it appears on the page?
  When an element is positioned absolutely, it is taken out of the flow of other elements, and its positioning is relative to its closest positioned ancestor or the document itself if no positioned ancestor is found.

- How do you constrain an absolutely positioned element to a containing block?
  To constrain an absolutely positioned element to a containing block have a position context set and then apply absolute positioning on the element.

- What are the four box offset properties?
  The four box offset properties are:
  1. top
  2. right
  3. bottom
  4. left

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
