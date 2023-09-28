const table = (char, shift) => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  if (arr.indexOf(char) < 0) return char; // keep the same if not exist
  let index = arr.indexOf(char) + shift;
  while (index > arr.length - 1) {
    index -= arr.length; // decrease until index existed in arr
  }
  return arr[index];
};

export const caesarCipher = (str, shift) => {
  if (isNaN(shift) || typeof shift !== 'number') throw new Error(); // handle shift not number
  if (!str) return ''; // handle falsey
  if (typeof str !== 'string') throw new Error(); // handle truthy but not string
  const result = str.split('').reduce((total, current) => {
    const isLowerCase = current === current.toLowerCase();
    current = table(current.toLowerCase(), shift);
    if (!isLowerCase) current = current.toUpperCase();
    return total + current;
  }, '');
  return result;
};
