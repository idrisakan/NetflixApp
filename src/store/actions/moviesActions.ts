import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verb';
import {
  MOVIE_URL,
  POPULER_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
} from '../../service/urls';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async () => {
    const response = await getRequest(TOP_RATED_MOVIES_URL, {});
    return response.data;
  },
);
const getPopulerMovies = createAsyncThunk(
  'movies/getPopulerMovies',
  async () => {
    const response = await getRequest(POPULER_MOVIES_URL, {});
    return response.data;
  },
);
const getMovieDetail = createAsyncThunk(
  'movies/getMovieDetail',
  async id => {
    const response = await getRequest(`${MOVIE_URL}/${id}`, {});
    return response.data;
  },
);
export {getTopRatedMovies, getPopulerMovies, getMovieDetail};
