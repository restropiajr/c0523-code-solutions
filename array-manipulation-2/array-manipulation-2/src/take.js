/* exported take */
function take(array, count) {
  const result = [];

  if (array.length === 0) {
    return [];
  }

  for (let i = 0; i < count; i++) {
    result.push(array[i]);
  }

  return result;
}
