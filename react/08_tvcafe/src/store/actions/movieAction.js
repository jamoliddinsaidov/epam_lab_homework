import axios from 'axios'
import { moviesScheduledForTodayUrl } from '../../utils/tvmazeApi'
import { currentDate } from '../../utils/getDates'
import {
	FETCH_MOVIES_SCHEDULED_FOR_TODAY_LOADING,
	FETCH_MOVIES_SCHEDULED_FOR_TODAY_SUCCESS,
	FETCH_MOVIES_SCHEDULED_FOR_TODAY_FAIL,
} from '../types'

export const LoadMovies = () => async (dispatch) => {
	dispatch({
		type: FETCH_MOVIES_SCHEDULED_FOR_TODAY_LOADING,
	})

	try {
		const movieData = await axios(moviesScheduledForTodayUrl(currentDate))
		const filteredMoviesData = movieData.data.filter(
			(movie) =>
				movie._embedded.show.genres.length !== 0 && movie.name !== 'TBA'
		)

		dispatch({
			type: FETCH_MOVIES_SCHEDULED_FOR_TODAY_SUCCESS,
			payload: {
				scheduledForToday: filteredMoviesData,
			},
		})
	} catch (err) {
		dispatch({
			type: FETCH_MOVIES_SCHEDULED_FOR_TODAY_FAIL,
			payload: {
				error: 'Failed to load movies...',
			},
		})
	}
}
