import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '@/config/drinkConfig';
import thunkWrapper from '../helpers/thunkWrapper';

export const getAllDrinksThunk = createAsyncThunk(
  'drinks/getAll',
  thunkWrapper(async ({ page }) => {
    const { data } = await API.get('api/drinks/cocktails/main', {
      params: {
        category: 'Ordinary Drink,Shake,Cocktail,Other/Unknown',
        page,
      },
    });
    return data;
  })
);

// Отримання для page Drinks
export const getAllSearchThunk = createAsyncThunk(
  'drinks/getAllSearch',
  thunkWrapper(
    async ({
      ingredient = '',
      category = '',
      query = '',
      page = 1,
      limit = 10,
    }) => {
      const { data } = await API.get('api/drinks/search', {
        params: {
          page,
          limit,
          keyword: query,
          category,
          ingredientId: ingredient,
        },
      });
      return data;
    }
  )
);

export const paginationThunk = createAsyncThunk(
  'drinks/getPagination',
  thunkWrapper(
    async ({
      ingredient = '',
      category = '',
      query = '',
      page = 1,
      limit = 10,
    }) => {
      const { data } = await API.get('api/drinks/search', {
        params: {
          page,
          limit,
          keyword: query,
          category,
          ingredientId: ingredient,
        },
      });

      return data;
    }
  )
);

// Отримання популярних  коктейлів
export const getPopularThunk = createAsyncThunk(
  'drinks/getPopular',
  thunkWrapper(async () => {
    const { data } = await API.get('api/drinks/popular');
    return data;
  })
);

// Отримання одного коктейлю за ID
export const getByIDThunk = createAsyncThunk(
  'drinks/getByID',
  thunkWrapper(async id => {
    const { data } = await API.get(`api/drinks/${id}`);
    return data;
  })
);

// Отримання власних коктейлів
export const getOwnThunk = createAsyncThunk(
  'drinks/getOwn',
  thunkWrapper(async ({ page = 1, limit = 10 }) => {
    const { data } = await API.get('api/drinks/own', {
      params: {
        page,
        limit,
      },
    });
    return data;
  })
);

// Видалення власних коктейлів
export const deleteFromOwnThunk = createAsyncThunk(
  'drinks/deleteFromOwn',
  thunkWrapper(async (id, { dispatch }) => {
    const { data } = await API.delete(`api/drinks/own/remove/${id}`);
    dispatch(getOwnThunk());
    return data.id;
  })
);

// Favorites
export const getFavoriteThunk = createAsyncThunk(
  'drinks/getFav',
  thunkWrapper(async ({ page = 1, limit = 10 }) => {
    const { data } = await API.get('api/drinks/favorite', {
      params: {
        page,
        limit,
      },
    });
    return data;
  })
);

export const addFavoriteThunk = createAsyncThunk(
  'drinks/addFav',
  thunkWrapper(async id => {
    const { data } = await API.post('api/drinks/favorite/add', {
      drinkId: id,
    });
    return data;
  })
);

export const deleteFromFavoriteThunk = createAsyncThunk(
  'drinks/deleteFromFav',
  thunkWrapper(async (id, { dispatch }) => {
    const data = await API.delete(`api/drinks/favorite/remove/${id}`);

    // dispatch(getFavoriteThunk());
    return id;
  })
);

export const addNewDrinkThunk = createAsyncThunk(
  'drinks/addNewDrink',
  async (body, thunkAPI) => {
    try {
      const { data } = await API.post(`api/drinks/own/add`, body);
      return data;
    } catch (error) {
      if (error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Отримання Privacy Policy та Public offering agreement
export const getPolicyThunk = createAsyncThunk(
  'drinks/getPolicy',
  thunkWrapper(async () => {
    const { data } = await API.get(`api/privacy/policy`);
    return data;
  })
);
export const getPublicThunk = createAsyncThunk(
  'drinks/getPublic',
  thunkWrapper(async () => {
    const { data } = await API.get(`api/privacy/public`);
    return data;
  })
);
