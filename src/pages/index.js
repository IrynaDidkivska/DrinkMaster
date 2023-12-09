import { lazy } from 'react';

export const AddDrink = lazy(() => import('./AddDrink/AddDrink'));
export const Drinks = lazy(() => import('./Drinks/Drinks'));
export const DrinkWithID = lazy(() => import('./DrinkWithID/DrinkWithID'));
export const Favorites = lazy(() => import('./Favorites/Favorites'));
export const HomePage = lazy(() => import('./HomePage/HomePage'));
export const MyDrinks = lazy(() => import('./MyDrinks/MyDrinks'));
export const NotFound = lazy(() => import('./NotFound/NotFound'));
export const Welcome = lazy(() => import('./Welcome/Welcome'));
