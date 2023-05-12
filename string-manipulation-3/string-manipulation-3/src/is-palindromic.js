/* exported isPalindromic */
function isPalindromic(string) {
  const noSpaceString = string.replace(' ', '');
  const reverseStringArray = [];

  for (let i = noSpaceString.length - 1; i >= 0; i--) {
    reverseStringArray.push(noSpaceString[i]);
  }
  const reverseString = reverseStringArray.join('');

  if (noSpaceString === reverseString) {
    return true;
  } else {
    return false;
  }
}
