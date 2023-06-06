function ExampleConstructor() {}

console.log(
  'value of ExampleConstructor.prototype:',
  ExampleConstructor.prototype
);
console.log(
  'typeof ExampleConstructor.prototype:',
  typeof ExampleConstructor.prototype
);

const variable = new ExampleConstructor();
console.log(variable);
const variable2 = variable instanceof ExampleConstructor;
console.log(variable2);
