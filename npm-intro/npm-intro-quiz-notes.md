# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  NPM (Node Package Manager) is a package manager for JavaScript, primarily used for managing and sharing packages of code in the Node.js ecosystem

- What is a package?
  A package, in the context of NPM, refers to a reusable piece of code or software module that can be installed and used in projects. Packages typically contain JavaScript code, configuration files, and metadata such as the package name, version, dependencies, and other information needed for the package to function correctly.

- What are some other popular package managers?
  Yarn: Developed by Facebook, Yarn is an alternative package manager that offers faster and more reliable dependency management. It is compatible with the NPM registry and uses a caching mechanism for improved performance.
  PNPM: PNPM is another lightweight package manager that aims to minimize disk space and installation time by sharing dependencies across projects. It creates a single instance of each package on the system and links them as needed.

- How can you create a `package.json` with `npm`?
  npm init

- What is a dependency and how do you add one to a package?
  A dependency is a package or module that is required for a project to function correctly. Dependencies are specified in the package.json file under the "dependencies" field. To add a dependency using NPM, you can use the following command:
  npm install <package-name>

- What happens when you add a dependency to a package with `npm`?
  When you add a dependency to a package using npm install, NPM retrieves the specified package from the NPM registry and installs it in the node_modules directory within your project. It also updates the package.json file to include the dependency in the "dependencies" field, along with the installed version.

- What is a devDependency and how do you add one to a package?
  A devDependency, on the other hand, refers to a package that is required during the development process but is not necessary for the production deployment of the project. DevDependencies are specified in the package.json file under the "devDependencies" field. To add a devDependency using NPM, you can use the following command:
  npm install --save-dev <package-name>

- How do you define and run `npm` scripts? Why are these useful?
  NPM scripts allow you to define custom scripts or commands within the package.json file that can be executed using the npm run command. To define an NPM script, you add a "scripts" field in your package.json file with a key-value pair where the key is the script name, and the value is the command or script to be executed. NPM scripts are useful for automating repetitive tasks, running build processes, starting servers, running tests, or executing any custom command related to your project. They provide a convenient way to define and execute commonly used commands without needing to remember or type them manually every time.

  "scripts": {
  "start": "node server.js"
  }

  npm run start

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
