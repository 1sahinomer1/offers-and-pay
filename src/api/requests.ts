import axios from "axios";

import { API } from "config/global-config";

import { IPackage, loginBody } from "./types";

export const registerUser = (data: loginBody) =>
  axios.post(`${API.mockApi}/signup`, data);

export const offerPackages = () =>
  axios.get<IPackage[]>(`${API.mockApi}/packages`);
