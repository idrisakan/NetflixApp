import {createSlice} from '@reduxjs/toolkit';
import {getPopulerTv, getTopRatedTv, getTvDetail} from '../actions/tvActions';
import {TvTypes} from '../../model/data/tvTypes';

const initialState: TvTypes = {
  pending: false,
  topRateTv: [],
  populerTv: [],
  tvDetailData: {},
};
const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTopRatedTv.pending, state => {
        state.pending = true;
      })
      .addCase(getTopRatedTv.fulfilled, (state, action: any) => {
        state.topRateTv = action.payload.results;
      })
      .addCase(getTopRatedTv.rejected, (state, action: any) => {})

      .addCase(getPopulerTv.pending, state => {
        state.pending = true;
      })
      .addCase(getPopulerTv.fulfilled, (state, action: any) => {
        state.populerTv = action.payload.results;
      })
      .addCase(getPopulerTv.rejected, (state, action: any) => {})

      .addCase(getTvDetail.pending, state => {
        state.pending = true;
      })
      .addCase(getTvDetail.fulfilled, (state, action: any) => {
        state.tvDetailData = action.payload;
      })
      .addCase(getTvDetail.rejected, (state, action: any) => {});
  },
});
export default tvSlice.reducer;
