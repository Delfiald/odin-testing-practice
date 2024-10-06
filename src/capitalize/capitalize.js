const capitalize = (text) => {
  const firstLetter = text.charAt(0).toUpperCase();
  const remainingText = text.slice(1);

  return firstLetter + remainingText;
};

export default capitalize;
