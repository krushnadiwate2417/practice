import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import balanceReducer from "../slices/balanceSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    account: balanceReducer,
  },
});

export default appStore;
