import React, { useState } from 'react'

// utils
import { formatWithComma } from '../../utils/formatString'
import { checkIsMovieFavorite } from '../../utils/localStorageConfig'
import {
	addFavoriteMovies,
	removeFromFavorites,
} from '../../utils/localStorageConfig'

const FavoriteRecommendButtons = ({ details }) => {
	// states
	const isFavoriteMovie = checkIsMovieFavorite(details.id)
	const [favoriteText, setFavoriteText] = useState(
		isFavoriteMovie ? 'Remove from favorites' : 'Add to favorites'
	)

	// handlers
	const favoriteClickHandler = () => {
		if (favoriteText.includes('Add')) {
			const movieDetails = {
				id: details.id,
				name: details.name,
				image: details.image.medium,
				rating: details.rating.average,
				genres: formatWithComma(details.genres),
				isFavorite: true,
			}

			const isAdded = addFavoriteMovies(movieDetails)

			if (isAdded) {
				setFavoriteText('Remove from favorites')
			}
		} else if (favoriteText.includes('Remove')) {
			const isRemoved = removeFromFavorites(details.id)

			if (isRemoved) {
				setFavoriteText('Add to favorites')
			}
		}
	}

	// const recommendClickHandler = () => {
	// 	const movieDetails = {
	// 		id: details.id,
	// 		name: details.name,
	// 		image: details.image.medium,
	// 		rating: details.rating.average,
	// 		genres: formatWithComma(details.genres),
	// 		friendName: '',
	// 		description: '',
	// 	}
	// }

	return (
		<>
			<button className='gradient-container' onClick={favoriteClickHandler}>
				{favoriteText}
			</button>
			<button className='gradient-container'>Recommend</button>
		</>
	)
}

export default FavoriteRecommendButtons
