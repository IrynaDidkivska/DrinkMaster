export const checkPage = (val, totalPages, setParams) => {
  const notNull = () => {
    setParams({ page: 1 });
    return 1;
  };

  const number = Number(val);

  return isNaN(number) ||
    number === 0 ||
    !Number.isInteger(number) ||
    (number > totalPages && totalPages) ||
    number < 0
    ? notNull()
    : number;
};
