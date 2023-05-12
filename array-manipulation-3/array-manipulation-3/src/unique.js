/* exported unique */
function unique(array) {
  const result = [];

  for (const el of array) {
    if (!result.includes(el)) {
      result.push(el);
    }
  }
  return result;
}
