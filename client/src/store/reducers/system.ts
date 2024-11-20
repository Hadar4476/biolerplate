import { ISystemState, IRootState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultSystemState: ISystemState = {
  isAppLoaded: false,
};

const system = createSlice({
  name: "system",
  initialState: defaultSystemState,
  reducers: {
    setIsAppLoaded: (state, action: PayloadAction<boolean>) => {
      state.isAppLoaded = action.payload;
    },
  },
});

export const systemActions = system.actions;

export const systemSelector = (state: IRootState) => state.system;

export default system.reducer;
