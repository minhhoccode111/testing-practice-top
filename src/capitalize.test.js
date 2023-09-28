import { capitalize } from './capitalize';

it('capitalize falsey input return empty string ', () => {
  expect(capitalize(null)).toBe('');
  expect(capitalize(NaN)).toBe('');
  expect(capitalize('')).toBe('');
  expect(capitalize(0)).toBe('');
  expect(capitalize()).toBe('');
});

it('capitalize works as expect', () => {
  expect(capitalize('a')).toBe('A');
  expect(capitalize('dE')).toBe('DE');
  expect(capitalize('ghi')).toBe('Ghi');
});

it('capitalize ignore not word', () => {
  expect(capitalize('1abc')).toBe('1abc');
  expect(capitalize('.abc')).toBe('.abc');
  expect(capitalize(' abc')).toBe(' abc');
});

it('capitalize if input is valid but not a string, throw error', () => {
  expect(() => capitalize(true)).toThrow();
  expect(() => capitalize([])).toThrow();
  expect(() => capitalize({})).toThrow();
  expect(() => capitalize(1)).toThrow(); // the function that throws an exception needs to be invoked within a wrapping function otherwise the `toThrow` assertion will fail
});
