/* exported reverseWords */
function reverseWords(string) {
  const splitString = string.split(' ');
  const reverseWords = [];

  for (const word of splitString) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    reverseWords.push(reverseWord);
  }

  return reverseWords.join(' ');
}
