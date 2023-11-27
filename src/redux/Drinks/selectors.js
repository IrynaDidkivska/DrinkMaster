export const selectPopulars = state => state.drinks.popular;

export const selectFavorites = state => state.drinks.favorite;

export const selectOwn = state => state.drinks.own;

export const selectByID = state => state.drinks.drinkId;

export const selectBySearch = state => state.drinks.search;

export const selectTotalPages = state => state.drinks.totalPages;

export const selectFilteredDrinks = state => state.drinks.filteredDrinks;

export const selectDetails = state => state.drinks.drinkDetails;

export const selectMainCatalog = state => state.drinks.drinks;
