import axios from 'axios'
import { searchByIdUrl } from '../../utils/tvmazeApi'
import {
	FETCH_MOVIE_BY_ID_LOADING,
	FETCH_MOVIE_BY_ID_SUCCESS,
	FETCH_MOVIE_BY_ID_FAIL,
} from '../types'

export const LoadMovieById = (id) => async (dispatch) => {
	dispatch({ type: FETCH_MOVIE_BY_ID_LOADING })

	try {
		const detailedData = await axios.get(searchByIdUrl(id))

		dispatch({
			type: FETCH_MOVIE_BY_ID_SUCCESS,
			payload: {
				detailedMovie: detailedData.data,
			},
		})
	} catch (error) {
		dispatch({
			type: FETCH_MOVIE_BY_ID_FAIL,
			payload: {
				error: 'Failed to load movies...',
			},
		})
	}
}
