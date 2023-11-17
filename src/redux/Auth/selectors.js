//getUser from state
export const getUser = (state) => state.auth.user; // об'єкт всього юзера

export const getIsLoading = (state) => state.auth.isLoading;

export const getIsAuth = (state) => state.auth.isAuth;

export const getIsAdult = (state) => state.auth.isAdult;
