/* exported drop */
function drop(array, count) {
  const result = [];

  if (array.length === 0) {
    return [];
  }

  for (let i = array.length - 1; i >= count; i--) {
    result.unshift(array[i]);
  }

  return result;
}
