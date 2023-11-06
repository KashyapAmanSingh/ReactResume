<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import UserDataSlice from "./Slice";

const store = configureStore({
  reducer: {
    user:UserDataSlice.reducer,
  },
});

export default store;
=======
import { configureStore } from "@reduxjs/toolkit";
import UserDataSlice from "./Slice";

const store = configureStore({
  reducer: {
    user:UserDataSlice.reducer,
  },
});

export default store;
>>>>>>> 439afe43bfeef0a26b450ba7a0d315a866f1101c
