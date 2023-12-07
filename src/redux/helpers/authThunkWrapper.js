import { toast } from 'react-toastify';

const authThunkWrapper = fn => {
  const fnWrapper = async (credentials, thunkAPI) => {
    try {
      return await fn(credentials, thunkAPI);
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  };
  return fnWrapper;
};

export default authThunkWrapper;
