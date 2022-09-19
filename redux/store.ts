import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
// import userSli from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
