import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import detailedMovieReducer from './detailedMovieReducer'
import searchMovieReducer from './searchMovieReducer'

const rootReducer = combineReducers({
  movies: movieReducer,
  detailedMovie: detailedMovieReducer,
  searchedMovies: searchMovieReducer,
})

export default rootReducer
