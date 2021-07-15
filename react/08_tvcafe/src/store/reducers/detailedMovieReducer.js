import {
	FETCH_MOVIE_BY_ID_LOADING,
	FETCH_MOVIE_BY_ID_SUCCESS,
	FETCH_MOVIE_BY_ID_FAIL,
} from '../types'

const initState = {
	details: [],
	isLoading: false,
	error: null,
}

const detailedMovieReducer = (state = initState, action) => {
	switch (action.type) {
		case FETCH_MOVIE_BY_ID_LOADING:
			return {
				...state,
				isLoading: true,
			}

		case FETCH_MOVIE_BY_ID_SUCCESS:
			return {
				...state,
				isLoading: false,
				details: action.payload.detailedMovie,
			}

		case FETCH_MOVIE_BY_ID_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			}

		default:
			return state
	}
}

export default detailedMovieReducer
