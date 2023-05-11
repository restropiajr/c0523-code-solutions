/* exported capitalize */
function capitalize(string) {
  const lowerCasedString = string.toLowerCase();
  const capitalizedLetter = lowerCasedString[0].toUpperCase();
  const restOfstring = lowerCasedString.slice(1);

  return capitalizedLetter + restOfstring;
}
