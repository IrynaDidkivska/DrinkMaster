const thunkWrapper = fn => {
  const fnWrapper = async (credentials, thunkAPI) => {
    try {
      return await fn(credentials, thunkAPI);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  };
  return fnWrapper;
};

export default thunkWrapper;
