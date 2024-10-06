import capitalize from './capitalize';

test('Capitalize one letter', () => {
  expect(capitalize('h')).toBe('H');
});

test('Capitalize one word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Capitalize', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('Not Capitalize if theres no character at all', () => {
  expect(capitalize('')).toBe('');
});

test('Not Capitalize if first character are not letter', () => {
  expect(capitalize('3, 2, 1, hello')).toBe('3, 2, 1, hello');
});
