import { createAsyncThunk } from "@reduxjs/toolkit";

import { contract, payment } from "api/requests";
import { paymentBody } from "api/types";

export const getContract = createAsyncThunk(
  "getContract",
  async (_, { rejectWithValue }) => {
    try {
      const response = await contract();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createPayment = createAsyncThunk(
  "createPayment",
  async (data: paymentBody, { rejectWithValue }) => {
    try {
      const response = await payment(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
