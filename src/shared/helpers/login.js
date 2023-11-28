import { API, setToken } from '@/config/drinkConfig';

export const loginRequest = async credentials => {
  const { data } = await API.post('api/auth/users/login', credentials);
  setToken(data.token);
  return data;
};
