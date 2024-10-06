const analyzeArray = (arr) => {
  if (!arr || !Array.isArray(arr)) {
    return null;
  }

  let numbers;

  if (arr.some((item) => Array.isArray(item))) {
    const flatArray = arr.flat(Infinity);
    numbers = flatArray.filter((item) => typeof item === 'number');
  } else {
    numbers = arr.filter(
      (item) => typeof item === 'number' && !Number.isNaN(item)
    );
  }

  if (numbers.length === 0) {
    return null;
  }

  const average =
    numbers.reduce((prev, next) => prev + next, 0) / numbers.length;

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return {
    average,
    min,
    max,
    length: numbers.length,
  };
};

export default analyzeArray;
