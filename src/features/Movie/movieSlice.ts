import { ListMovie } from './../../models/movie';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import MovieApi from '../../api/movieApi';

export const fetchMoviePopular: any  = createAsyncThunk('Movie/fetchMovie',
  async () => {
    return MovieApi.fetchAllMoviePopular()
    .then(function (response:any) {
      return response.data
    })
    .catch(function (error:any) {
      console.log(error);
    })
   
  }
)

const initialState: ListMovie = {
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 1,
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMoviePopular.fulfilled]: (state: ListMovie, action: PayloadAction<ListMovie>) => {
      Object.assign(state, action.payload);
      console.log("state===", state, action)
    }
  }
 
  
})
export default movieSlice.reducer
