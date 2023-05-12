/* exported numVowels */
function numVowels(string) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (const char of string) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
