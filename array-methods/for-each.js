const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((value) => {
  console.log('In Order:', value);
});

values.forEach((value) => {
  const reverseIndex = values.length - 1 - values.indexOf(value);
  console.log('Reverse Order:', values[reverseIndex]);
});
