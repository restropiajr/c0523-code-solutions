/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

// isUnderFive(number)
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

console.log('value of isUnderFive(4) is:', isUnderFive(4));
console.log('value of isUnderFive(10) is:', isUnderFive(10));
console.log('value of isUnderFive(5) is:', isUnderFive(5));

// isEven(number)
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('value of isEven(4) is:', isEven(4));
console.log('value of isEven(10) is:', isEven(10));
console.log('value of isEven(5) is:', isEven(5));

// startsWithJ(string)
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

console.log(
  "value of startsWithJ('JavaScript') is:",
  startsWithJ('JavaScript')
);
console.log("value of startsWithJ('PHP') is:", startsWithJ('PHP'));
console.log("value of startsWithJ('HTML') is:", startsWithJ('HTML'));
console.log("value of startsWithJ('Java') is:", startsWithJ('Java'));
console.log("value of startsWithJ('Kotlin') is:", startsWithJ('Kotlin'));
console.log("value of startsWithJ('C#') is:", startsWithJ('C#'));

// isOldEnoughToDrink(person)
const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

console.log('value of isOldEnoughToDrink(bart) is:', isOldEnoughToDrink(bart));

// isOldEnoughToDrive(person)
const homer = {
  name: 'Homer Jay Simpson',
  age: 39,
};

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

console.log(
  'value of isOldEnoughToDrive(homer) is:',
  isOldEnoughToDrive(homer)
);

// isOldEnoughToDrinkAndDrive(person)
function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
console.log(
  'value of isOldEnoughToDrinkAndDrive(homer) is:',
  isOldEnoughToDrinkAndDrive(homer)
);

// categorizeAcidity(pH)
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH <= 6) {
    return 'acid';
  } else if (pH >= 8 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

console.log('value of categorizeAcidity(-1) is:', categorizeAcidity(-1));
console.log(
  'value of categorizeAcidity(14.0000001) is:',
  categorizeAcidity(14.0000001)
);
console.log('value of categorizeAcidity(7) is:', categorizeAcidity(7));
console.log('value of categorizeAcidity(2) is:', categorizeAcidity(2));
console.log('value of categorizeAcidity(9) is:', categorizeAcidity(9));

// introduceWarnerBro(name)
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return '"We\'re the warner brothers!"';
    case 'dot':
      return '"I\'m cute~"';
    default:
      return '"Goodnight everybody!"';
  }
}

console.log(
  'value of introduceWarnerBro("yakko") is:',
  introduceWarnerBro('yakko')
);
console.log(
  'value of introduceWarnerBro("wakko") is:',
  introduceWarnerBro('wakko')
);
console.log(
  'value of introduceWarnerBro("dot") is:',
  introduceWarnerBro('dot')
);
console.log(
  'value of introduceWarnerBro("cody") is:',
  introduceWarnerBro('cody')
);
console.log(
  'value of introduceWarnerBro("minerva") is:',
  introduceWarnerBro('minerva')
);

// recommendMovie(genre)
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'John Wick';
    case 'comedy':
      return 'Hangover';
    case 'horror':
      return 'Insidious';
    case 'drama':
      return 'Old';
    case 'musical':
      return 'La La Land';
    case 'sci-fi':
      return 'Interstellar';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musicall, or sci-fi.';
  }
}

console.log("value of recommendMovie('action') is:", recommendMovie('action'));
console.log("value of recommendMovie('comedy') is:", recommendMovie('comedy'));
console.log("value of recommendMovie('random') is:", recommendMovie('random'));
