import { combineReducers } from "@reduxjs/toolkit";

import auth from "./reducers/auth";
import general from "./reducers/general";

const rootReducer = combineReducers({
  auth,
  general,
});

export default rootReducer;
