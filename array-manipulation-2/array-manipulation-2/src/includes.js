/* exported includes */
function includes(array, value) {
  for (const el of array) {
    if (el === value) {
      return true;
    }
  }

  return false;
}
