export const reverseString = (str) => {
  if (!str) return '';
  if (typeof str !== 'string') throw new Error('Input is not string');
  return str.split('').reverse().join('');
};
