# unit-tests-jest-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are unit tests?
  Unit tests are a type of software testing that focus on verifying the individual components or units of a program. In the context of programming, a unit is the smallest testable part of an application, such as a function, method, or class. Unit tests aim to isolate and test each unit in isolation to ensure that it behaves as expected. They are typically written by developers and are automated to run frequently during the development process.

- Why is it important to write unit tests?
  Bug Detection: Unit tests help catch bugs early in the development process, reducing the chances of introducing regressions and issues in the future.

  Code Quality: Testing forces developers to write modular and well-structured code, as unit tests require code to be easily testable in isolation.

  Refactoring Safety: Unit tests provide a safety net during code refactoring. When making changes, developers can run unit tests to ensure that existing functionality remains intact.

  Documentation: Unit tests act as living documentation, helping developers and team members understand how each component should work.

  Continuous Integration: Automated unit tests can be integrated into the continuous integration (CI) process, providing fast feedback on code changes.

- What code should be tested with a unit test? What code is not well suited for unit tests?
  Unit tests are best suited for testing small, independent pieces of code such as functions, methods, or classes. They work well for pure functions that produce deterministic outputs based on their inputs. Unit tests are particularly effective when testing complex or critical logic.

  Code that is not well-suited for unit testing includes:

  External dependencies such as databases, web services, or network calls: Testing such dependencies requires more extensive testing (e.g., integration tests) and mocks or stubs.

  User interfaces and their interactions: UI testing is typically done with end-to-end testing frameworks, not unit tests.

- What is Jest? What are some other popular JavaScript unit testing frameworks?
  Jest is a popular JavaScript testing framework developed by Facebook. It is widely used for unit testing in React, Node.js, and other JavaScript-based applications. Jest provides a simple and powerful API for writing test cases, along with built-in code coverage reporting, mocking capabilities, and snapshot testing.

  Mocha: A flexible and feature-rich testing framework that can be used with various assertion libraries and supports asynchronous testing.

  Jasmine: A behavior-driven testing framework that is easy to get started with and provides its own assertion library.

  Ava: A fast and minimalistic testing framework with concurrent test execution.

  Tape: A minimalistic testing framework with a focus on simplicity and minimal overhead.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
