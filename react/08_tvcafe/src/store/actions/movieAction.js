import axios from 'axios'
import {
	moviesScheduledForTodayUrl,
	mixedMoviesUrl,
} from '../../utils/tvmazeApi'
import { currentDate } from '../../utils/getDates'
import {
	FETCH_MOVIES_LOADING,
	FETCH_MOVIES_SUCCESS,
	FETCH_MOVIES_FAIL,
} from '../types'

export const LoadMoviesForToday = () => async (dispatch) => {
	dispatch({
		type: FETCH_MOVIES_LOADING,
	})

	try {
		// movies scheduled for today
		const movieForTodayData = await axios(
			moviesScheduledForTodayUrl(currentDate)
		)
		const filteredMoviesData = movieForTodayData.data.filter(
			(movie) =>
				movie._embedded.show.genres.length !== 0 && movie.name !== 'TBA'
		)

		// popular shows
		const showsData = await axios(mixedMoviesUrl())
		console.log(showsData)
		const popularShowsData = showsData.data.filter(
			(show) => show.rating.average >= 8
		)

		dispatch({
			type: FETCH_MOVIES_SUCCESS,
			payload: {
				scheduledForToday: filteredMoviesData,
				popularShows: popularShowsData,
			},
		})
	} catch (err) {
		dispatch({
			type: FETCH_MOVIES_FAIL,
			payload: {
				error: 'Failed to load movies...',
			},
		})
	}
}
