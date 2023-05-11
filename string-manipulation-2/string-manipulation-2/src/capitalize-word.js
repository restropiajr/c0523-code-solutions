/* exported capitalizeWord */
function capitalizeWord(word) {
  const lowerCasedWord = word.toLowerCase();
  const capitalizedFirstLetter = lowerCasedWord[0].toUpperCase();
  const restOfWord = lowerCasedWord.slice(1);

  if (lowerCasedWord === 'javascript') {
    return 'JavaScript';
  }

  return `${capitalizedFirstLetter}${restOfWord}`;
}
