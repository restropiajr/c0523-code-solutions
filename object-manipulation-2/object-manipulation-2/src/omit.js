/* exported omit */
function omit(source, keys) {
  const object = {};

  for (const key in source) {
    if (!keys.includes(key)) {
      object[key] = source[key];
    }
  }

  return object;
}
