const shiftCharacter = (char, shift) => {
  const charCode = char.charCodeAt(0);

  if (charCode >= 65 && charCode <= 90) {
    return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
  }
  if (charCode >= 97 && charCode <= 122) {
    return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
  }

  return char;
};

const caesarCipher = (text, shiftValue) => {
  if (typeof shiftValue !== 'number') {
    return null;
  }

  const shift = ((shiftValue % 26) + 26) % 26;
  let cipheredText = '';
  for (let i = 0; i < text.length; i += 1) {
    cipheredText += shiftCharacter(text.charAt(i), shift);
  }

  return cipheredText;
};

export default caesarCipher;
