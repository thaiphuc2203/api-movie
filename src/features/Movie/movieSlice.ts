import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MovieApi from '../../api/movieApi';
const axios = require('axios');
const API_KEY = 'cfe422613b250f702980a3bbf9e90716'
const URL_MOVIE_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
export const fetchMoviePopular: any  = createAsyncThunk('Movie/fetchMovie',
  async (dispatch) => {
    return axios.get(URL_MOVIE_POPULAR)
    .then(function (response:any) {
      console.log("fetchAllMoviePopular", response.data)
      return response.data
    })
    .catch(function (error:any) {
      console.log(error);
    })
   
  }
)

interface ItemMOvie {
  movieID: string,
  original_title: string
}

const initialState: ItemMOvie = {
  movieID: '',
  original_title: '',
}



const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
   
  },
  extraReducers: {
    [fetchMoviePopular.fulfilled]: (state: any, action:any) => {
      console.log(action)
    }
  }
 
  
})
export default movieSlice.reducer
