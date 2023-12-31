export const calculator = {
  convert(num) {
    if (num === null) throw new Error('Input cannot be null');
    num = Number(num);
    if (isNaN(num)) throw new Error('Input is not a number');
    return num;
  },
  add(num0, num1) {
    num0 = calculator.convert(num0);
    num1 = calculator.convert(num1);
    return num0 + num1;
  },
  subtract(num0, num1) {
    num0 = calculator.convert(num0);
    num1 = calculator.convert(num1);
    return num0 - num1;
  },
  divide(num0, num1) {
    num0 = calculator.convert(num0);
    num1 = calculator.convert(num1);
    return num0 / num1;
  },
  multiply(num0, num1) {
    num0 = calculator.convert(num0);
    num1 = calculator.convert(num1);
    return num0 * num1;
  },
};
