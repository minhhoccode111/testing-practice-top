import { analyzeArray } from './analyze-array';

test('analyzeArray handle error', () => {
  const _null = null;
  const _undefined = undefined;
  const _NaN = NaN;
  const _zero = 0;
  const _empty = '';
  const _number = 123;
  const _obj = {};
  const _str = 'string';
  const _emptyArr = [];
  const _arrNotNumber = [1, 2, 3, 4, 5, 'a', 6];
  expect(() => analyzeArray(_arrNotNumber)).toThrow();
  expect(() => analyzeArray(_undefined)).toThrow();
  expect(() => analyzeArray(_emptyArr)).toThrow();
  expect(() => analyzeArray(_number)).toThrow();
  expect(() => analyzeArray(_empty)).toThrow();
  expect(() => analyzeArray(_zero)).toThrow();
  expect(() => analyzeArray(_null)).toThrow();
  expect(() => analyzeArray(_NaN)).toThrow();
  expect(() => analyzeArray(_obj)).toThrow();
  expect(() => analyzeArray(_str)).toThrow();
});

test('analyzeArray works as expect', () => {
  const arrWithOneZero = [0];
  const expectOfArrWithOneZero = { min: 0, max: 0, average: 0, length: 1 };
  const arrWithManyZero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const expectOfArrWithManyZero = { min: 0, max: 0, average: 0, length: 9 };
  const arrNormal = [1, 2, 3, 4, 5, 6, 7, 8];
  const expectOfArrNormal = { min: 1, max: 8, length: 8, average: 4.5 };
  const negativeArr = [-1, -2, -3, -4, -5, -6, -7, -8];
  const expectOfNegativeArr = { min: -8, max: -1, length: 8, average: -4.5 };

  expect(analyzeArray(arrWithManyZero)).toStrictEqual(expectOfArrWithManyZero);
  expect(analyzeArray(arrWithOneZero)).toStrictEqual(expectOfArrWithOneZero);
  expect(analyzeArray(negativeArr)).toStrictEqual(expectOfNegativeArr);
  expect(analyzeArray(arrNormal)).toStrictEqual(expectOfArrNormal);
});
