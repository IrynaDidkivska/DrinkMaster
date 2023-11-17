import axios from "axios";
import { API } from "../../config/drinkConfig";

const BASE_URL = "https://drink-master-project.onrender.com";

export async function addContact(formData) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: formData,
  };

  const { data } = await axios.post(
    `${BASE_URL}/api/application`,
    formData,
    options
  );

  return data;
}

export async function getWakeUpServer() {
  await API.get(``);
}
