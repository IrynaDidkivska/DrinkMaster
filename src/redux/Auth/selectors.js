import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.auth.user; 

export const selectIsLoading = state => state.auth.isLoading;

export const selectIsAuth = state => state.auth.isAuth;

export const selecctIsAdult = state => state.auth.isAdult;

export const selectToken = state => state.auth.token;

export const selectSubscribe = state => state.auth.isSubscribed;

export const selectIsAdult = createSelector([selectUser], user => {
  return user.isAdult;
});

