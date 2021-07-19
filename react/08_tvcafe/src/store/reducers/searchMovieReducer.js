import {
	SEARCH_MOVIES_LOADING,
	SEARCH_MOVIES_SUCCESS,
	SEARCH_MOVIES_FAIL,
} from '../types'

const initState = {
	searched: [],
	isLoading: false,
	error: null,
}

const searchMovieReducer = (state = initState, action) => {
	switch (action.type) {
		case SEARCH_MOVIES_LOADING:
			return {
				...state,
				isLoading: true,
			}

		case SEARCH_MOVIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				searched: action.payload.searchedMovies,
			}

		case SEARCH_MOVIES_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			}

		default:
			return state
	}
}

export default searchMovieReducer
