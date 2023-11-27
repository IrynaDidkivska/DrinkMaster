import { API } from '../../config/drinkConfig';

export async function getWakeUpServer() {
  await API.get(`api/application`);
}
