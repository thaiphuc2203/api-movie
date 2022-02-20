import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MovieApi from '../../api/movieApi';

export const fetchMoviePopular: any = createAsyncThunk('Movie/fetchMovie',
  async (payload: any) => {
    console.log('fetchMoviePopular')
    // let data: any = await MovieApi.fetchAllMoviePopular(payload);
    return  await MovieApi.fetchAllMoviePopular(payload);
  }
)
interface ItemMOvie {
  movieID: string
  original_title: string
}

const movieSlice:any = createSlice({
  name: 'movie',
  initialState: [] as ItemMOvie[],
  reducers: {
    increment:(state) => {
      console.log(state ,'increment')
    }
  },
  // extraReducers: {
  //   [fetchMoviePopular.fulfilled]: (state, action) =>{
  //     console.log(state,action.payload,'extraReducers')
  //   }
  // }
})

const { actions, reducer } = movieSlice
export const { increment } = actions
export default reducer