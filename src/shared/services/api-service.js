import axios from 'axios';
import { API } from '../../config/drinkConfig';

export async function addContact(formData) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: formData,
  };

  const { data } = await axios.post(
    `${API}/api/application`,
    formData,
    options
  );

  return data;
}

export async function getWakeUpServer() {
  await axios.get(`${API}/api/application`);
}
