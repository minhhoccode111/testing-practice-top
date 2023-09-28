import { reverseString } from './reverse-string';

it('reverseString handle falsey cases', () => {
  expect(reverseString(null)).toBe('');
  expect(reverseString(NaN)).toBe('');
  expect(reverseString('')).toBe('');
  expect(reverseString(0)).toBe('');
  expect(reverseString()).toBe('');
});

it('reverseString works as expect', () => {
  expect(reverseString('a.b.c')).toBe('c.b.a');
  expect(reverseString('a b c')).toBe('c b a');
  expect(reverseString('abc')).toBe('cba');
  expect(reverseString('a')).toBe('a');
});

it('reverseString if input is valid but not a string, throw error', () => {
  expect(() => reverseString(true)).toThrow();
  expect(() => reverseString([])).toThrow();
  expect(() => reverseString({})).toThrow();
  expect(() => reverseString(1)).toThrow(); // the function that throws an exception needs to be invoked within a wrapping function otherwise the `toThrow` assertion will fail
});
