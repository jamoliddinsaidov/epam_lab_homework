import axios from 'axios'
import {
	SEARCH_MOVIES_LOADING,
	SEARCH_MOVIES_SUCCESS,
	SEARCH_MOVIES_FAIL,
} from '../types'
import { fuzzySearchUrl } from '../../utils/tvmazeApi'

export const SearchMovie = (searchTerm) => async (dispatch) => {
	dispatch({
		type: SEARCH_MOVIES_LOADING,
	})

	try {
		const searchedData = await axios.get(fuzzySearchUrl(searchTerm))

		dispatch({
			type: SEARCH_MOVIES_SUCCESS,
			payload: {
				searchedMovies: searchedData.data,
			},
		})
	} catch (error) {
		dispatch({
			type: SEARCH_MOVIES_FAIL,
			error,
		})
	}
}
