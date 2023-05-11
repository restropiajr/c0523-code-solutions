/* exported chunk */
function chunk(array, size) {
  const result = [];

  if (array.length === 0) {
    return [];
  }

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}
