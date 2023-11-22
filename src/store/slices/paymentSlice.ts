import { createSlice } from "@reduxjs/toolkit";
import { IPaymentInitialState } from "./types";
import { getContract } from "store/thunks/paymentThunks";

const initialState: IPaymentInitialState = {
  error: null,
  isLoading: false,
  contractText: "",
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getContract.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(getContract.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contractText = action.payload.content;
    });

    builder.addCase(getContract.rejected, state => {
      state.isLoading = false;
    });
  },
});

export default paymentSlice.reducer;
