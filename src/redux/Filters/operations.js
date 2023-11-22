import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/drinkConfig';

export const getCategoriesThunk = createAsyncThunk(
  'filter/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('api/filters/categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getIngredientsThunk = createAsyncThunk(
  'filter/getIngredients',
  async (query, thunkAPI) => {
    // FIXME: навіщо пейдж і ліміт, якщо в нас дропдаун
    // я не знаю)) так була написана санка)
    try {
      const { page = 0, limit = 0 } = query;
      const { data } = await API.get('api/filters/ingredients', {
        params: {

          page,
          limit,

        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getGlassesThunk = createAsyncThunk(
  'filter/getGlasses',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('api/filters/glasses');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);


// export const getDrinksByQueryThunk = createAsyncThunk(
//   "filter/getDrinksByQuery",
//   async ({ searchQuery, page, limit }, thunkAPI) => {
//     try {
//       // FIXME: правильній урл на сьорч
//       const { ingridient, category, query } = searchQuery;
//       const { data } = await API.get("api/drinks/mainpage", {
//         params: {
//           page,
//           limit,
//           query,
//           category,
//           ingridient,
//         },
//       });
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

