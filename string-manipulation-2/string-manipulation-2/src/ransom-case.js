/* exported ransomCase */
function ransomCase(string) {
  const result = [];
  const lowerCasedString = string.toLowerCase();

  for (let i = 0; i < lowerCasedString.length; i++) {
    if (i === 0 || i % 2 === 0) {
      result.push(lowerCasedString[i]);
    } else {
      result.push(lowerCasedString[i].toUpperCase());
    }
  }
  return result.join('');
}
