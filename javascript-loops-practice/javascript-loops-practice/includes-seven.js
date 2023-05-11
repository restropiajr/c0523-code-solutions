/* exported includesSeven */
function includesSeven(array) {
  let count = 0;

  for (const num of array) {
    if (num === 7) {
      count++;
    }
  }

  if (count === 0) {
    return false;
  } else {
    return true;
  }
}
