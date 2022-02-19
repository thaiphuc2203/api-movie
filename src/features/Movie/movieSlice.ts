import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MovieApi from '../../api/movieApi';

export const fetchMoviePopular: any = createAsyncThunk(
  'fetchMoviePopular',
  async () => {
    return await MovieApi.fetchMoviePopular();
  }
)

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
      data: []
  },
  reducers: {
    fetchMoviePopular(state) {
      console.log("state", state)
      }
  },
  // extraReducers: {
  //     //'user/register/fulfilled': () => {}
  //     [register.fulfilled]: (state: any, action: any) => {
  //         state.current = action.payload;
  //     },

  //     [login.fulfilled]: (state, action) => {
  //         state.current = action.payload;
  //     }
  // }
})

const { actions, reducer } = movieSlice
export default reducer