# css-cascade-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the four components of "the Cascade".
  The four components of "the Cascade" are:

  1. Source Order
  2. Inheritance
  3. Specificity
  4. !important

- What does the term "source order" mean with respect to CSS?
  The term "source order" with respect to CSS means the order that your CSS rules are written in your stylesheet. The styling provided for an element last in your stylesheet is the styling that will ultimately take effect.

- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  It is possible for the styles of an element to be applied to its children as well without an additional CSS rule because of Inheritance which is the process by which certain CSS properties on a child HTML element can receive value from a parent element, if no CSS for that property is directly declared on the child element.

- List the three selector types in order of increasing specificity.
  The three selectoe types in order of increasing specificity are:

  type (0-0-1) > class (0-1-0) > ID (1-0-0)

- Why is using `!important` considered bad practice?
  !important is considered bad practice because it reverses the cascade order of stylesheets and makes it hard to maintain. Also makes it difficult for other web developers.

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
