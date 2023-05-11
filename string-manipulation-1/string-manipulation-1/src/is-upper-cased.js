/* exported isUpperCased */
function isUpperCased(string) {
  const upperCasedString = string.toUpperCase();
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (upperCasedString[i] === string[i]) {
      count++;
    }
  }

  if (count === upperCasedString.length) {
    return true;
  } else {
    return false;
  }
}
