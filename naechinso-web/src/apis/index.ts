import axios from "axios";

export const serverAxios = axios.create({
  baseURL: "https://api.naechinso.com",
});
