# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  We log things to the console in order to output information for debugging and checking if the code works as intended.

- What is the purpose of events and event handling?
  The purpose of events and event handling is to make web pages interactive and dynamic.

- Are all possible parameters required to use a JavaScript method or function?
  Parameters are not required to use a JavaScript method or function.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  The method of element objects let you set up a function to be called when a specific type of event occurs is addEventListener().

- What is a callback function?
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- What object is passed into an event listener callback when the event fires?
  The object that is passed into an event listener callback when the event fires is the first argument of the event listener.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The `event.target` is a property of the event object that refers to the element that triggered the event. If you weren't sure and want more information about it, you can check using MDN.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  The first line of code is the correct way to create an event listener. The handleclick is an argument that is referenced for the eventlistener function.
  The second line of code is the incorrect way to create an event listener. The handleclick() will be executed first and then passed as an argument into the eventlistener function.

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
