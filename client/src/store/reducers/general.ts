import { IAuthState, IGeneralState, IRootState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultGeneralState: IGeneralState = {
  isAppLoaded: false,
};

const general = createSlice({
  name: "general",
  initialState: defaultGeneralState,
  reducers: {
    setIsAppLoaded: (state, action: PayloadAction<boolean>) => {
      state.isAppLoaded = action.payload;
    },
  },
});

export const generalActions = general.actions;

export const generalSelector = (state: IRootState) => state.general;

export default general.reducer;
