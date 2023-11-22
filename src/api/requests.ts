import axios from "axios";

import { API } from "config/global-config";

import { IGetContract, IPackage, loginBody, paymentBody } from "./types";

export const registerUser = (data: loginBody) =>
  axios.post(`${API.mockApi}/signup`, data);

export const offerPackages = () =>
  axios.get<IPackage[]>(`${API.mockApi}/packages`);

export const contract = () => axios.get<IGetContract>(`${API.mockApi}/payment`);

export const payment = (data: paymentBody) =>
  axios.post(`${API.mockApi}/payment`, data);
