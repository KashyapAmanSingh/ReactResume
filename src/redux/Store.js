import { configureStore } from "@reduxjs/toolkit";
import UserDataSlice from "./Slice";

const store = configureStore({
  reducer: {
    user:UserDataSlice.reducer,
  },
});

export default store;
