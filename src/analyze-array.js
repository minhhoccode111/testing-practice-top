export const analyzeArray = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Input is not an array');
  if (!arr.length) throw new Error('Input cannot be an empty array');
  let sum = 0;
  let len = arr.length;
  return arr.reduce(
    (total, current) => {
      if (typeof current !== 'number') throw new Error('Invalid element in array');
      sum += current;
      total.average = sum / len;
      const currentMin = total.min ?? current;
      const currentMax = total.max ?? current;
      total.min = currentMin < current ? currentMin : current;
      total.max = currentMax > current ? currentMax : current;
      return total;
    },
    { length: len, average: sum / len }
  );
};
