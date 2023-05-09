// convertMinutestToSeconds(minutes)
function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

console.log(`5 minutes in seconds is ${convertMinutesToSeconds(5)}.`);

// greet(name)
function greet(name) {
  return `Hey, ${name}.`;
}

console.log(greet('Beavis'));

// getArea(width, height)
function getArea(width, height) {
  const area = width * height;
  return area;
}

console.log(`The area of the rectangle is ${getArea(17, 42)}.`);

// getFirstName(person)
function getFirstName(person) {
  const firstName = person.firstName;
  return firstName;
}

console.log(
  `The person's first name is ${getFirstName({
    firstName: 'Lelouche',
    lastName: 'Lamperouge',
  })}.`
);

// getLastElement(array)
function getLastElement(array) {
  const lastElement = array[array.length - 1];
  return lastElement;
}

console.log(
  `The last element of the array is ${getLastElement([
    'propane',
    'and',
    'propane',
    'accessories',
  ])}.`
);
