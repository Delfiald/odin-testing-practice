const calculator = (number1, number2) => {
  const isNumber = () =>
    typeof number1 === 'number' && typeof number2 === 'number';

  const add = () => {
    if (isNumber()) {
      return number1 + number2;
    }
    return undefined;
  };

  const subtract = () => {
    if (isNumber()) {
      return number1 - number2;
    }
    return undefined;
  };

  const divide = () => {
    if (isNumber()) {
      return number2 === 0 ? undefined : number1 / number2;
    }

    return undefined;
  };

  const multiply = () => {
    if (isNumber()) {
      return number1 * number2;
    }

    return undefined;
  };

  return {
    add,
    subtract,
    divide,
    multiply,
  };
};

export default calculator;
