/* exported flatten */
function flatten(array) {
  const result = [];
  console.log(array);

  for (const el of array) {
    console.log(el);
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
