import { calculator } from './calculator';

const add = calculator.add;
const sub = calculator.subtract;
const divide = calculator.divide;
const multiply = calculator.multiply;

test('calculator handle falsey', () => {
  const inputUndefined = undefined;
  const inputStringWord = 'abc';
  const inputNull = null;
  const inputNaN = NaN;
  const inputObj = {};
  expect(() => add(inputStringWord, inputStringWord)).toThrow();
  expect(() => add(inputUndefined, inputUndefined)).toThrow();
  expect(() => add(inputNull, inputNull)).toThrow();
  expect(() => add(inputNaN, inputNaN)).toThrow();
  expect(() => add(inputObj, inputObj)).toThrow();
  expect(() => sub(inputStringWord, inputStringWord)).toThrow();
  expect(() => sub(inputUndefined, inputUndefined)).toThrow();
  expect(() => sub(inputNull, inputNull)).toThrow();
  expect(() => sub(inputNaN, inputNaN)).toThrow();
  expect(() => sub(inputObj, inputObj)).toThrow();
  expect(() => divide(inputStringWord, inputStringWord)).toThrow();
  expect(() => divide(inputUndefined, inputUndefined)).toThrow();
  expect(() => divide(inputNull, inputNull)).toThrow();
  expect(() => divide(inputNaN, inputNaN)).toThrow();
  expect(() => divide(inputObj, inputObj)).toThrow();
  expect(() => multiply(inputStringWord, inputStringWord)).toThrow();
  expect(() => multiply(inputUndefined, inputUndefined)).toThrow();
  expect(() => multiply(inputNull, inputNull)).toThrow();
  expect(() => multiply(inputNaN, inputNaN)).toThrow();
  expect(() => multiply(inputObj, inputObj)).toThrow();
});

test('calculator can handle string numbers', () => {
  const strNum0 = '123';
  const strNum1 = '456';
  expect(add(strNum0, strNum1)).toBe(123 + 456);
  expect(sub(strNum0, strNum1)).toBe(123 - 456);
  expect(divide(strNum0, strNum1)).toBe(123 / 456);
  expect(multiply(strNum0, strNum1)).toBe(123 * 456);
});

test('calculator works as expect', () => {
  const num0 = 123;
  const num1 = 456;
  expect(add(num0, num1)).toBe(123 + 456);
  expect(sub(num0, num1)).toBe(123 - 456);
  expect(divide(num0, num1)).toBe(123 / 456);
  expect(multiply(num0, num1)).toBe(123 * 456);
});
