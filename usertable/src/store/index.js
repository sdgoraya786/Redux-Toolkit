import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slice/UserSlice";

/** #4 */
const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
export default store;
