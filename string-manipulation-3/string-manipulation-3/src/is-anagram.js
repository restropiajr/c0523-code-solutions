/* exported isAnagram */
function isAnagram(firstString, secondString) {
  let count = 0;
  const normalizedFirstString = firstString.replaceAll(' ', '');
  const normalizedSecondString = secondString.replaceAll(' ', '');

  const sortedFirstString = normalizedFirstString.split('').sort();
  const sortedSecondString = normalizedSecondString.split('').sort();

  for (let i = 0; i < sortedFirstString.length; i++) {
    if (sortedFirstString[i] === sortedSecondString[i]) {
      count++;
    }
  }

  if (count === sortedFirstString.length) {
    return true;
  } else {
    return false;
  }
}
