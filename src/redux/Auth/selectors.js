import { createSelector } from '@reduxjs/toolkit';

//getUser from state
export const selectUser = state => state.auth.user; // об'єкт всього юзера

export const selectIsLoading = state => state.auth.isLoading;

export const selectIsAuth = state => state.auth.isAuth;

export const selecctIsAdult = state => state.auth.isAdult;

export const selectToken = state => state.auth.token;

export const selectSubscribe = state => state.auth.isSubscribed;

export const selectIsAdult = createSelector([selectUser], user => {
  return user.isAdult;
});
