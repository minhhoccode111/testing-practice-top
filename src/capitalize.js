export const capitalize = (str) => {
  if (!str) return '';
  if (typeof str !== 'string') throw new Error('Invalid input');
  return str[0].toUpperCase() + str.slice(1);
};
