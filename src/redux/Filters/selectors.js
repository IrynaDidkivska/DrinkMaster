import { createSelector } from '@reduxjs/toolkit';

export const selectIngredient = state => state.filter.ingredients;

export const selectCategories = state => state.filter.categories;

export const selectSearchQuery = state => state.filter.searchQuery;

export const selectGlasses = state => state.filter.glasses;

export const selectNormalizedCategories = createSelector(
  [selectCategories],
  categories => {
    return categories.map(({ _id, category }) => ({
      label: category,
      value: _id,
    }));
  },
);

export const selectNormalizedIngredients = createSelector(
  [selectIngredient],
  ingredients => {
    return ingredients.map(({ _id, title }) => ({
      label: title,
      value: _id,
    }));
  },
);

export const selectNormalizedGlasses = createSelector(
  [selectGlasses],
  glasses => {
    return glasses.map(({ _id, glass }) => ({
      label: glass,
      value: _id,
    }));
  },
);
