export const reverseString = (str) => {
  if (!str) return '';
  if (typeof str !== 'string') throw new Error('Invalid input');
  return str.split('').reverse().join('');
};
