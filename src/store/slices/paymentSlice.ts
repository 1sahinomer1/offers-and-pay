import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

import { createPayment, getContract } from "store/thunks/paymentThunks";

import { IPaymentInitialState } from "./types";

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
    builder.addCase(createPayment.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(createPayment.fulfilled, (state, action) => {
      state.isLoading = false;
      toast.success("Sipariş başarılı bir şekilde oluşturuldu.");
    });

    builder.addCase(createPayment.rejected, state => {
      state.isLoading = false;
      toast.error("Sipariş oluşturulurken hata oluştu.");
    });
  },
});

export default paymentSlice.reducer;
