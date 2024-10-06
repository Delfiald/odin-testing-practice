import caesarCipher from './caesarCipher';

test('Returns null when no parameters are provided', () => {
  expect(caesarCipher()).toBeNull();
});

test('Cipher a single letter', () => {
  expect(caesarCipher('a', 3)).toBe('d');
});

test('Cipher a single word', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('Wraps around to the start of the alphabet when ciphering', () => {
  expect(caesarCipher('zxc', 3)).toBe('caf');
});

test('Cipher with uppercase letters', () => {
  expect(caesarCipher('HELLO', 3)).toBe('KHOOR');
});

test('Cipher mixed case letters', () => {
  expect(caesarCipher('AbC', 3)).toBe('DeF');
});

test('Cipher text with non-alphabetical characters', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Returns input unchanged when shift value is 0', () => {
  expect(caesarCipher('abc', 0)).toBe('abc');
});

test('Cipher with negative shift value', () => {
  expect(caesarCipher('abc', -53)).toBe('zab');
});

test('Cipher with shift value greater than 26', () => {
  expect(caesarCipher('abc', 29)).toBe('def');
});

test('Returns empty string when input is empty', () => {
  expect(caesarCipher('', 3)).toBe('');
});

test('Returns null when shift value is not provided', () => {
  expect(caesarCipher('abc')).toBeNull();
});

test('Returns null when shift value is not number', () => {
  expect(caesarCipher('abc', 'a')).toBeNull();
});

test('Returns input unchanged when there are no alphabetical characters', () => {
  expect(caesarCipher('123', 3)).toBe('123');
});

test('Returns input unchanged when there are only special characters', () => {
  expect(caesarCipher('!@#$%^&*()', 3)).toBe('!@#$%^&*()');
});
