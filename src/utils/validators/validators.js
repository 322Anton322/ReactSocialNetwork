export const required = (value) => {
  if (value) return undefined;
  return "Field is required ";
};
/*
export const maxLenghtCreator = (maxLenght) => (value) => {
  if (value.lenght > maxLenght) return `Max lenght no more than ${maxLenght}`;
  return undefined;
};
*/
export const maxLenghtCreator = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined