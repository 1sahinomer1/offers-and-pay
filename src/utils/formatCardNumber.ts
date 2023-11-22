const formatCardNumber = (inputValue: string): string => {
  const cardNumberWithoutSpaces = inputValue.replace(/\s/g, "");
  const formattedCardNumber = cardNumberWithoutSpaces.replace(
    /(\d{4})/g,
    "$1 "
  );
  return formattedCardNumber.trim();
};

export default formatCardNumber;
