import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { ApiKey } from "../../common/apis/MovieApiKey";

/** #18 fetch movies with the heplp of  AsyncThunk*/
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const res = await MovieApi.get(`?apikey=${ApiKey}&s=${term}&type=movie`);
    return res.data;
    /** return Async Action Creator */
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "shows/fetchAsyncShows",
  async (term) => {
    const res = await MovieApi.get(`?apikey=${ApiKey}&s=${term}&type=series`);
    return res.data;
    /** return Async Action Creator */
  }
);

/** 24 */
export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
  "movie/fetchAsyncMovieOrShowDetails",
  async (id) => {
    const res = await MovieApi.get(`?apikey=${ApiKey}&i=${id}&Plot=full`);
    return res.data;
    /** return Async Action Creator */
  }
);

/** #13 */
const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
  meta: {},
  loading: "",
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  /** 19,20 */
  extraReducers: {
    [fetchAsyncMovies.pending]: (state, action) => {
      console.log("Panding", action);
      return { ...state, meta: action.meta, loading: true };
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload, meta }) => {
      console.log("Fetch Successfully");
      return { ...state, movies: payload, meta: meta, loading: false };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload, meta }) => {
      console.log("Fetch shows Successfully");
      return { ...state, shows: payload, meta: meta, loading: false };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetch movieorshow Successfully");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
