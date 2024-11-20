import { ISystemState, IRootState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultSystemState: ISystemState = {
  isAppLoaded: false,
  language: "en",
};

const system = createSlice({
  name: "system",
  initialState: defaultSystemState,
  reducers: {
    setIsAppLoaded: (state, action: PayloadAction<boolean>) => {
      state.isAppLoaded = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const systemActions = system.actions;

export const systemSelector = (state: IRootState) => state.system;

export default system.reducer;
