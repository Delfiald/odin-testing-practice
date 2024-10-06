import analyzeArray from './analyzeArray';

test('Return null if there are no parameters', () => {
  const object = analyzeArray();
  expect(object).toBeNull();
});

test('Return null if input is not an array', () => {
  const object = analyzeArray(1);
  expect(object).toBeNull();
});

test('Return null if the array is empty', () => {
  const object = analyzeArray([]);
  expect(object).toBeNull();
});

test('Analyze array with only one value', () => {
  const object = analyzeArray([2]);
  expect(object).toStrictEqual({
    average: 2,
    min: 2,
    max: 2,
    length: 1,
  });
});

test('Analyze array that contains only numbers', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Analyze array with negative numbers and zero', () => {
  const object = analyzeArray([-1, 0, 1, -2, 2]);
  expect(object).toStrictEqual({
    average: 0,
    min: -2,
    max: 2,
    length: 5,
  });
});

test('Return null if the array contains no numeric values', () => {
  const object = analyzeArray(['1', '8', '3', '4', null, '2', '6', 'abc']);
  expect(object).toBeNull();
});

test('Analyze array with mixed types', () => {
  const object = analyzeArray([() => 4, 1, 'two', 3, null, 4, { 3: 3, 4: 4 }]);
  expect(object).toStrictEqual({
    average: 2.6666666666666665,
    min: 1,
    max: 4,
    length: 3,
  });
});

test('Analyze array with NaN values', () => {
  const object = analyzeArray([1, 2, NaN, 3]);
  expect(object).toStrictEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test('Analyze array with Infinity values', () => {
  const object = analyzeArray([1, 2, -Infinity, 3]);
  expect(object).toStrictEqual({
    average: -Infinity,
    min: -Infinity,
    max: 3,
    length: 4,
  });
});

test('Analyze multidimensional array', () => {
  const object = analyzeArray([
    [1, 2, 3],
    [4, [5, 6]],
  ]);
  expect(object).toStrictEqual({
    average: 3.5,
    min: 1,
    max: 6,
    length: 6,
  });
});
