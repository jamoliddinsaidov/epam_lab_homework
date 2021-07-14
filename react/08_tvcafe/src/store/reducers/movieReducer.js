import {
	FETCH_MOVIES_LOADING,
	FETCH_MOVIES_SUCCESS,
	FETCH_MOVIES_FAIL,
} from '../types'

const initState = {
	scheduledForToday: [],
	popularShows: [],
	isLoading: false,
	error: null,
}

const movieReducer = (state = initState, action) => {
	switch (action.type) {
		case FETCH_MOVIES_LOADING:
			return {
				...state,
				isLoading: true,
			}

		case FETCH_MOVIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				scheduledForToday: action.payload.scheduledForToday,
				popularShows: action.payload.popularShows,
			}

		case FETCH_MOVIES_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			}

		default:
			return state
	}
}

export default movieReducer
