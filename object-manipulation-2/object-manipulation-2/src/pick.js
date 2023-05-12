/* exported pick */
function pick(source, keys) {
  const object = {};

  for (const key of keys) {
    if (key in source && source[key] !== undefined) {
      object[key] = source[key];
    }
  }

  return object;
}
