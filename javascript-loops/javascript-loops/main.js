/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// getNumbersToTen()
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber += 1;
  }

  return numbers;
}

// getEvenNumbersToTwenty()
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }

  return evenNumbers;
}

// repeatWord(word, times)
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';

  while (count <= times) {
    repeated += word;
    count++;
  }

  return repeated;
}

// logEachCharacter(string)
function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

// doubleAll(numbers)
function doubleAll(numbers) {
  const doubled = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }

  return doubled;
}

// getKeys(objects)
function getKeys(object) {
  const keys = [];

  for (const key in object) {
    keys.push(key);
  }

  return keys;
}

// getValues(object)
function getValues(object) {
  const values = [];

  for (const key in object) {
    values.push(object[key]);
  }

  return values;
}
