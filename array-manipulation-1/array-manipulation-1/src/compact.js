/* exported compact */
function compact(array) {
  const result = [];

  for (const val of array) {
    if (val) {
      result.push(val);
    }
  }

  return result;
}
