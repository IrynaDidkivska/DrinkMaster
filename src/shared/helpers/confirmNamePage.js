export const confirmNamePage = (namePage) => {
  let confirmedNamePages = {
    welcome: false,
    signin: false,
    signup: false,
    drinks: false,
    add: false,
    favorites: false,
    home: false,
    my: false,
  };

  Object.keys(confirmedNamePages).forEach((item) => {
    if (namePage === "/") {
      confirmedNamePages.home = true;
    } else if (namePage.includes(item)) {
      confirmedNamePages[item] = true;
    }
  });

  return confirmedNamePages;
};
