/* exported union */
function union(first, second) {
  const result = [];

  for (const el of first) {
    result.push(el);
  }

  for (const el of second) {
    if (result.includes(el)) {
      continue;
    } else {
      result.push(el);
    }
  }

  return result;
}
