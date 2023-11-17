//getUser from state
export const getUser = (state) => state.auth.user; // обєкт всього юзера
// FIXME: переробити на selectUser
export const getIsLoading = (state) => {
  return state.auth.isLoading;
};

export const getIsAuth = (state) => {
  return state.auth.isAuth;
};
export const getIsAdult = (state) => {
  return state.auth.isAdult;
};
