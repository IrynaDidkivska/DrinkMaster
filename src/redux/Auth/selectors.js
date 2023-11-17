//getUser from state
export const getUser = (state) => {
  console.log(state.user.user);
  return state.user.user;
};

export const getIsLoading = (state) => {
  return state.user.isLoading;
};

export const getIsAuth = (state) => {
  return state.user.isAuth;
};
export const getIsAdult = (state) => {
  return state.user.isAdult;
};
