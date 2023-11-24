export const editString = (name) => {
  if (name) {
    const arrFromStr = name.split(" ");
    const res = arrFromStr.map((el) => el[0].toUpperCase() + el.slice(1));
    return res.join(" ");
  }
};
