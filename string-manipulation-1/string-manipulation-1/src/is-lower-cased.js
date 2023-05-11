/* exported isLowerCased */
function isLowerCased(string) {
  const lowerCasedString = string.toLowerCase();
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (lowerCasedString[i] === string[i]) {
      count++;
    }
  }

  if (count === lowerCasedString.length) {
    return true;
  } else {
    return false;
  }
}
