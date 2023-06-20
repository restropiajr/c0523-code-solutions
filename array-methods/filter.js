const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log('Even Numbers:', evenNumbers);

const noD = names.filter((name) => {
  return !name.includes('d') && !name.includes('D');
});
console.log('No Ds:', noD);
