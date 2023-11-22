import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

import { getPackages } from "store/thunks/packagesThunks";

import { IPackagesInitialState } from "./types";

const initialState: IPackagesInitialState = {
  packages: [],
  selectedPackage: null,
  isLoading: false,
  error: null,
};

const packagesSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    setSelectedPackage: (state, action) => {
      state.selectedPackage = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getPackages.pending, state => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getPackages.fulfilled, (state, action) => {
      state.packages = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getPackages.rejected, state => {
      state.isLoading = false;
      toast.error("Bir şeyler yanlış gitti.");
    });
  },
});

export default packagesSlice.reducer;
export const { setSelectedPackage } = packagesSlice.actions;
