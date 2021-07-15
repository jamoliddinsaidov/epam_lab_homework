import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import detailedMovieReducer from './detailedMovieReducer'

const rootReducer = combineReducers({
	movies: movieReducer,
	detailedMovie: detailedMovieReducer,
})

export default rootReducer
