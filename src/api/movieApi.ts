const axios = require('axios');
const API_KEY = 'cfe422613b250f702980a3bbf9e90716'
const URL_MOVIE_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

const MovieApi = {
  fetchAllMoviePopular() {
    return axios.get(URL_MOVIE_POPULAR)
    }
}

export default MovieApi