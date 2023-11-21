import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IBasketInitialState } from "./types";
import { IPackage } from "api/types";

const initialState: IBasketInitialState = {
  myBasket: [],
};

const packagesSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IPackage>) => {
      const selectedPackage = action.payload;
      const isPackageInBasket = state.myBasket.some(
        pkg => pkg.id === selectedPackage.id
      );

      if (!isPackageInBasket) {
        return {
          ...state,
          myBasket: [...state.myBasket, selectedPackage],
        };
      }
      return state;
    },
    deleteFromBasket: (state, action: PayloadAction<string>) => {
      const packageId = action.payload;
      const index = state.myBasket.findIndex(pkg => pkg.id === packageId);

      if (index !== -1) {
        const updatedBasket = [...state.myBasket];
        updatedBasket.splice(index, 1);
        return {
          ...state,
          myBasket: updatedBasket,
        };
      }
      return state;
    },
  },
});

export const { addToBasket, deleteFromBasket } = packagesSlice.actions;

export default packagesSlice.reducer;
