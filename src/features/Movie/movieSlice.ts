import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MovieApi from '../../api/movieApi';

export const fetchMoviePopular: any = createAsyncThunk('Movie/fetchMovie',
  async () => {
    console.log('fetchMoviePopular')
    let data: any = await MovieApi.fetchAllMoviePopular();
    return  data
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
  }
})


export const { increment } = movieSlice.actions
export default movieSlice.reducer