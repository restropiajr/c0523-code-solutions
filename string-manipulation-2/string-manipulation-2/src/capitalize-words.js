/* exported capitalizeWords */
function capitalizeWords(string) {
  const lowerCasedString = string.toLowerCase();
  const stringArray = lowerCasedString.split(' ');
  const result = [];

  for (const word of stringArray) {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    result.push(`${firstLetter}${restOfWord}`);
  }

  return result.join(' ');
}
