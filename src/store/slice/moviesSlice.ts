import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  getMovieDetail,
  getPopulerMovies,
  getTopRatedMovies,
} from '../actions/moviesActions';
import {MoviesTypes} from '../../model/data/moviesTypes';
const initialState: MoviesTypes = {
  pending: false,
  topRateMovies: [],
  populerMovies: [],
  movieDetailData: {},
};
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    resetDetailData: (state, action) => {
      state.movieDetailData = {};
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTopRatedMovies.pending, state => {
        state.pending = true;
      })
      .addCase(
        getTopRatedMovies.fulfilled,
        (state, action: PayloadAction<T>) => {
          state.topRateMovies = action.payload.results;
        },
      )
      .addCase(
        getTopRatedMovies.rejected,
        (state, action: PayloadAction<T>) => {},
      )
      .addCase(getPopulerMovies.pending, state => {
        state.pending = true;
      })
      .addCase(
        getPopulerMovies.fulfilled,
        (state, action: PayloadAction<T>) => {
          state.populerMovies = action.payload.results;
        },
      )
      .addCase(
        getPopulerMovies.rejected,
        (state, action: PayloadAction<T>) => {},
      )
      .addCase(getMovieDetail.pending, state => {
        state.pending = true;
      })
      .addCase(getMovieDetail.fulfilled, (state, action: PayloadAction<T>) => {
        state.movieDetailData = action.payload;
        state.pending = false;
      })
      .addCase(
        getMovieDetail.rejected,
        (state, action: PayloadAction<T>) => {},
      );
  },
});
export const {resetDetailData} = moviesSlice.actions;
export default moviesSlice.reducer;
