/* exported intersection */
function intersection(first, second) {
  const result = [];

  for (const el of first) {
    if (second.includes(el)) {
      result.push(el);
    }
  }
  return result;
}
