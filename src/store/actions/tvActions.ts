import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verb';
import {POPULER_TV_URL, TOP_RATED_TV_URL, TV_URL} from '../../service/urls';

const getTopRatedTv = createAsyncThunk(
  'Tv/getTopRatedTv',
  async () => {
    const response = await getRequest(TOP_RATED_TV_URL, {});
    return response.data;
  },
);
const getPopulerTv = createAsyncThunk(
  'Tv/getPopulerTv',
  async () => {
    const response = await getRequest(POPULER_TV_URL, {});
    return response.data;
  },
);
const getTvDetail = createAsyncThunk(
  'Tv/getTvDetail',
  async () => {
    const response = await getRequest(TV_URL, {});
    return response.data;
  },
);
export {getTopRatedTv,getPopulerTv,getTvDetail};
