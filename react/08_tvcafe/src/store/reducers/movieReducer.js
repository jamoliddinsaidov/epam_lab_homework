import {
	FETCH_MOVIES_SCHEDULED_FOR_TODAY_LOADING,
	FETCH_MOVIES_SCHEDULED_FOR_TODAY_SUCCESS,
	FETCH_MOVIES_SCHEDULED_FOR_TODAY_FAIL,
} from '../types'

const initState = {
	scheduledForToday: [],
	isLoading: false,
	error: null,
}

const movieReducer = (state = initState, action) => {
	switch (action.type) {
		case FETCH_MOVIES_SCHEDULED_FOR_TODAY_LOADING:
			return {
				...state,
				isLoading: true,
			}

		case FETCH_MOVIES_SCHEDULED_FOR_TODAY_SUCCESS:
			return {
				...state,
				isLoading: false,
				scheduledForToday: action.payload.scheduledForToday,
			}
		case FETCH_MOVIES_SCHEDULED_FOR_TODAY_FAIL:
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
