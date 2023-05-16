import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movies/movieSlice";
/** #11 */
export const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});
