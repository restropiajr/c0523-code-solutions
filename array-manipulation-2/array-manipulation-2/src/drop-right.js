/* exported dropRight */
function dropRight(array, count) {
  const result = [];

  if (array.length === 0) {
    return [];
  }

  for (let i = 0; i < array.length - count; i++) {
    result.push(array[i]);
  }
  return result;
}
