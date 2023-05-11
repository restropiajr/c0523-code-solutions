/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const result = [];

  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result.push(string[secondIndex]);
    } else if (i === secondIndex) {
      result.push(string[firstIndex]);
    } else {
      result.push(string[i]);
    }
  }

  return result.join('');
}
