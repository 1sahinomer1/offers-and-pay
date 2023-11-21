import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import packagesSlice from "./slices/packagesSlice";
import basketSlice from "./slices/basketSlice";
// ...

export const store = configureStore({
  reducer: {
    user: userSlice,
    packages: packagesSlice,
    basket: basketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
