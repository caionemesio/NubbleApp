function capitalizeFirstLetter(value: string): string {
  return value
    .split(' ')
    .filter(word => word.length > 0)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export const stringUtils = {
  capitalizeFirstLetter,
};
