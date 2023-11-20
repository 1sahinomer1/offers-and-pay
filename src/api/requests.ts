import axios from "axios";
import { API } from "config/global-config";

type loginBody = {
  fullName: string;
  mail: string;
};

export const registerUser = (data: loginBody) =>
  axios.post(`${API.mockApi}/signup`, data);
