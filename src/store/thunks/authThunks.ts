import { createAsyncThunk } from "@reduxjs/toolkit";

import { registerUser } from "api/requests";

type loginBody = {
  fullName: string;
  mail: string;
};

export const loginUser = createAsyncThunk(
  "createUser",
  async (data: loginBody, { rejectWithValue }) => {
    try {
      const response = await registerUser(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
