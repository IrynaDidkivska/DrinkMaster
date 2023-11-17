import axios from "axios";

export const API = axios.create({
  baseURL: "https://drink-master-project.onrender.com/",
});

export const setToken = (token) => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  API.defaults.headers.common.Authorization = ``;
};
