/* exported difference */
function difference(first, second) {
  const result = [];

  const combined = [...first, ...second];

  for (const el of combined) {
    if (first.includes(el) && second.includes(el)) {
      continue;
    } else {
      result.push(el);
    }
  }

  return result;
}
