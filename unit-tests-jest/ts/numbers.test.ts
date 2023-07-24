import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

type Numbers = number[];
type RandomObject = Record<string, unknown>;

describe('evenNumbers', () => {
  it('returns the array of even numbers', () => {
    const numbers: Numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns the amount to a string of dollars and cents', () => {
    const amount = 12.335;
    const result = toDollars(amount);
    expect(result).toEqual('$12.34');
  });
  it('returns the amount to a string of dollars and cents', () => {
    const amount = 12.35;
    const result = toDollars(amount);
    expect(result).toEqual('$12.35');
  });
});

describe('divideBy', () => {
  it('returns the array of division results', () => {
    const numbers: Numbers = [0, 1, 2, 3];
    const divisor = 1;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([0, 1, 2, 3]);
  });
  it('returns the array of division results', () => {
    const numbers: Numbers = [0, 1, 2, 3];
    const divisor = 0;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([NaN, Infinity, Infinity, Infinity]);
  });
});

describe('multiplyBy', () => {
  it('returns the object of multiplication results of properties with number datatype values', () => {
    const object: RandomObject = {
      score: 50,
      age: 10,
      petsHave: 5,
    };
    const multiplier = 1;
    const result = multiplyBy(object, multiplier);
    expect(result).toEqual({
      score: 50,
      age: 10,
      petsHave: 5,
    });
  });
  it('returns the object of multiplication results of properties with number datatype values', () => {
    const object: RandomObject = {
      score: 50,
      age: 10,
      petName: 'Billy',
    };
    const multiplier = 1;
    const result = multiplyBy(object, multiplier);
    expect(result).toEqual({
      score: 50,
      age: 10,
      petName: 'Billy',
    });
  });
});
