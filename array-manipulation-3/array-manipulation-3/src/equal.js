/* exported equal */
function equal(first, second) {
  let count = 0;

  if (first.length === second.length) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] === second[i]) {
        count++;
      }
    }
  }

  if (count === first.length) {
    return true;
  } else {
    return false;
  }
}
