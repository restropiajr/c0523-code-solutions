/* exported takeRight */
function takeRight(array, count) {
  const result = [];

  if (count > array.length) {
    return array;
  }

  for (let i = array.length - count; i < array.length; i++) {
    result.push(array[i]);
  }

  return result;
}
