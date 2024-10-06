import reverseString from "./reserveString"

test('Reverse String one letter', () => {
  expect(reverseString('h')).toBe('h')
})

test('Reverse String', () => {
  expect(reverseString('hello')).toBe('olleh')
})

test('Reverse String with spaces', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh')
})

test('Proceed if nothing theres no letter at all', () => {
  expect(reverseString('')).toBe('')
})
