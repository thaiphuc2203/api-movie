
export interface ItemMovie {
  adult: Boolean,
  backdrop_path: String,
  genre_ids: Array<Number>,
  id: Number,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number
}
export interface ListMovie {
  page: Number,
  results: Array<ItemMovie>,
  total_pages: Number,
  total_results: Number,
}

export interface TitleSearch {
  title: String,
}

// export interface rootState {
//   movie: Object,
//   user: Object
// }