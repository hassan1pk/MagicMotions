import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  latest: null,
  exclusive: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.latest = action.payload.latest;
      state.exclusive = action.payload.exclusive;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectLatest = (state) => state.movie.latest;
export const selectExclusive = (state) => state.movie.exclusive;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
