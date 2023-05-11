/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (const vowel of vowels) {
    if (char === vowel) {
      return true;
    }
  }

  return false;
}
