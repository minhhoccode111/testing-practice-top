export const capitalize = (str) => {
  if (!str) return '';
  if (typeof str !== 'string') throw new Error('Input is not string');
  return str[0].toUpperCase() + str.slice(1);
};
