import calculator from "./calculator"

test('Add operations of two numbers', () => {
  expect(calculator(1, 2).add()).toBe(3)
})

test('Do not execute add operations if one of the parameters is not a number.', () => {
  expect(calculator('a', 2).add()).toBeUndefined()
})

test('Subtract operations of two numbers', () => {
  expect(calculator(1, 2).subtract()).toBe(-1)
})

test('Do not execute subtract operations if one of the parameters is not a number.', () => {
  expect(calculator('1', 2).subtract()).toBeUndefined()
})

test('Divide operations of two numbers', () => {
  expect(calculator(1, 2).divide()).toBe(0.5)
})

test('Do not execute divide operation if the second parameter is zero.', () => {
  expect(calculator(1, 0).divide()).toBeUndefined()
})

test('Do not execute divide operations if one of the parameters is not a number.', () => {
  expect(calculator('1', 2).divide()).toBeUndefined()
})

test('Multiply operations of two numbers', () => {
  expect(calculator(1, 2).multiply()).toBe(2)
})

test('Do not execute multiply operations if one of the parameters is not a number.', () => {
  expect(calculator('1', 2).multiply()).toBeUndefined()
})

test('Do not execute any operations if theres only one parameter', () => {
  expect(calculator(2).add()).toBeUndefined()
})

test('Do not execute any operations if parameters are not number.', () => {
  expect(calculator('1', '2').subtract()).toBeUndefined()
})

test('Do not execute any operations if theres no parameters', () => {
  expect(calculator().add()).toBeUndefined()
})