/* exported flatten */
function flatten(array) {
  const result = [];

  for (const el of array) {
    if (Array.isArray(el)) {
      for (const val of el) {
        result.push(val);
      }
    } else {
      result.push(el);
    }
  }
  return result;
}
