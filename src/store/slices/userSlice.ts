import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

import { loginUser } from "store/thunks/authThunks";

const initialState = {
  fullName: "",
  mail: "",
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.fullName = action.meta.arg.fullName;
      state.mail = action.meta.arg.mail;
      state.isLoading = false;
      toast.success(action.payload.message);
    });

    builder.addCase(loginUser.rejected, state => {
      state.isLoading = false;
      toast.error("Bir şeyler yanlış gitti.");
    });
  },
});

export default userSlice.reducer;
