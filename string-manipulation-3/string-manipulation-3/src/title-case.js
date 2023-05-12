/* exported titleCase */
function titleCase(title) {
  const titleArray = title.toLowerCase().split(' ');
  const result = [];
  const minorWords = [
    'and',
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to',
  ];

  for (let i = 0; i < titleArray.length; i++) {
    if (titleArray[i].includes('javascript')) {
      if (titleArray[i].includes(':')) {
        const capitalizedWord = 'JavaScript:';
        result.push(capitalizedWord);
      } else {
        const capitalizedWord = 'JavaScript';
        result.push(capitalizedWord);
      }
    } else if (titleArray[i].includes('api')) {
      const capitalizedWord = titleArray[i].toUpperCase();
      result.push(capitalizedWord);
    } else if (i === 0) {
      const capitalizedWord =
        titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1);
      result.push(capitalizedWord);
    } else if (titleArray[i].length >= 4) {
      if (titleArray[i].includes('-')) {
        const hyphenatedArray = titleArray[i].split('-');
        const result2 = [];
        for (const word of hyphenatedArray) {
          const hyphenatedWord = word.charAt(0).toUpperCase() + word.slice(1);
          result2.push(hyphenatedWord);
        }
        result.push(result2.join('-'));
      } else {
        const capitalizedWord =
          titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1);
        result.push(capitalizedWord);
      }
    } else if (titleArray[i].length < 4) {
      if (titleArray[i - 1].includes(':')) {
        const capitalizedWord =
          titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1);
        result.push(capitalizedWord);
      } else if (minorWords.includes(titleArray[i])) {
        result.push(titleArray[i]);
      } else {
        const capitalizedWord =
          titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1);
        result.push(capitalizedWord);
      }
    }
  }
  return result.join(' ');
}
