/* exported zip */
function zip(first, second) {
  const result = [];

  if (first.length > second.length) {
    while (first.length > second.length) {
      first.pop();
    }
  } else if (first.length < second.length) {
    while (first.length < second.length) {
      second.pop();
    }
  }

  for (let i = 0; i < first.length; i++) {
    const layer = [];
    layer.push(first[i]);
    layer.push(second[i]);
    result.push(layer);
  }

  for (const el of result) {
    if (el.length < 1) {
      result.pop(el);
    }
  }

  return result;
}
