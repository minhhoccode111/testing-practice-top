import { caesarCipher } from './caesar-cipher';

test('caesarCipher handle falsey', () => {
  const inputUndefined = undefined;
  const inputEmptyString = '';
  const inputNull = null;
  const inputNaN = NaN;
  const inputZero = 0;

  expect(caesarCipher(inputEmptyString, 13)).toBe('');
  expect(caesarCipher(inputUndefined, 13)).toBe('');
  expect(caesarCipher(inputZero, 13)).toBe('');
  expect(caesarCipher(inputNull, 13)).toBe('');
  expect(caesarCipher(inputNaN, 13)).toBe('');
});

test('caesarCipher handle not string', () => {
  const number = 123;
  const obj = {};
  const arr = [];
  const boolean = true;

  expect(() => caesarCipher(number, 13)).toThrow();
  expect(() => caesarCipher(obj, 13)).toThrow();
  expect(() => caesarCipher(arr, 13)).toThrow();
  expect(() => caesarCipher(boolean, 13)).toThrow();
});

test('caesarCipher shift factor not number', () => {
  const obj = {};
  const arr = [];
  const _NaN = NaN;
  const _null = null;
  const string = 'abc';
  const boolean = true;
  const _undefined = undefined;

  expect(() => caesarCipher('a', obj)).toThrow();
  expect(() => caesarCipher('a', arr)).toThrow();
  expect(() => caesarCipher('a', _NaN)).toThrow();
  expect(() => caesarCipher('a', _null)).toThrow();
  expect(() => caesarCipher('a', string)).toThrow();
  expect(() => caesarCipher('a', boolean)).toThrow();
  expect(() => caesarCipher('a', _undefined)).toThrow();
});

test('caesarCipher works as expected with all words lowercase', () => {
  expect(caesarCipher('The quick brown fox jumps over a lazy dog.', 0)).toBe('The quick brown fox jumps over a lazy dog.');
  expect(caesarCipher('The quick brown fox jumps over a lazy dog.', 1)).toBe('Uif rvjdl cspxo gpy kvnqt pwfs b mbaz eph.');
  expect(caesarCipher('The quick brown fox jumps over a lazy dog.', 13)).toBe('Gur dhvpx oebja sbk whzcf bire n ynml qbt.');
  expect(caesarCipher('The quick brown fox jumps over a lazy dog.', 39)).toBe('Gur dhvpx oebja sbk whzcf bire n ynml qbt.'); // 13 will be equal to 39 ..etc no matter how large the number is
  expect(caesarCipher('The quick brown fox jumps over a lazy dog.', 25)).toBe('Sgd pthbj aqnvm enw itlor nudq z kzyx cnf.');
});
