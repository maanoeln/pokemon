export const formattedPokemnonId = (value: string): string => {
  if (+value < 1000) {
    return value.padStart(4, '0');
  }

  return value;
};
