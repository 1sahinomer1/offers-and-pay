import { createAsyncThunk } from "@reduxjs/toolkit";

import { offerPackages } from "api/requests";

export const getPackages = createAsyncThunk(
  "getPackages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await offerPackages();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
