// The Math Object
const num1 = 10;
const num2 = 20;
const num3 = 30;
const maximumValue = Math.max(num1, num2, num3);
console.log('value of maximumValue is: ', maximumValue);

const heroes = ['Deadpool', 'Ironman', 'Spiderman', 'Thor'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex is:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('value of randomHero is:', randomHero);

// Array Methods
const library = [
  {
    title: 'The Cat in the Hat',
    author: 'Dr. Seuss',
  },
  {
    title: 'Pendragon',
    author: 'D.J. MacHale',
  },
  {
    title: 'The Adventure of Captain Underpants',
    author: 'Dav Pilkey',
  },
];

const lastBook = library.pop();
console.log('value of lastBook is:', lastBook);
const firstBook = library.shift();
console.log('value of firstBook is:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library is:', library);

// String Methods
const fullName = 'Roland Estropia Jr.';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName is:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName is:', sayMyName);
