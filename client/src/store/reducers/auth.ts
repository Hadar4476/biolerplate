import { IAuthState, IRootState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const defaultAuthState: IAuthState = {
  isLoggedIn: false,
  token: null,
  expiryDate: "",
  user: null,
};

const auth = createSlice({
  name: "auth",
  initialState: defaultAuthState,
  reducers: {},
});

export const authActions = auth.actions;

export const authSelector = (state: IRootState) => state.auth;

export default auth.reducer;
