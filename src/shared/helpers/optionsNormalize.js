export const optionsNormalize = (arr, label, value = '_id') => {
  return arr.map(el => ({ label: el[label], value: el[value] }));
};
