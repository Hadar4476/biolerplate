import { IRootState } from "@/types";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import auth from "./reducers/auth";

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
