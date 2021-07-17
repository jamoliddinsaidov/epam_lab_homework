import React, { useState } from 'react'
import styled from 'styled-components'

// components
import ImageContainer, { StyledImageContainer } from './ImageContainer'

// utils
import { colors } from '../../components/GlobalStyles'
import { formatSummary, formatWithComma } from '../../utils/formatString'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faStar,
	faGlobe,
	faLanguage,
	faQuestionCircle,
	faClock,
	faFilm,
	faPlayCircle,
	faShapes,
} from '@fortawesome/free-solid-svg-icons'
import {
	checkIsUserSignedIn,
	addFavoriteMovies,
	removeFromFavorites,
	checkIsMovieFavorite,
} from '../../utils/localStorageConfig'

const DetailedMovieContent = ({ details }) => {
	const isFavoriteMovie = checkIsMovieFavorite(details.id)
	const [favoriteText, setFavoriteText] = useState(
		isFavoriteMovie ? 'Remove from favorites' : 'Add to favorites'
	)
	const isUserSignedIn = checkIsUserSignedIn()

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

	return (
		<>
			<StyledDetails>
				<ImageContainerStyled>
					<ImageContainer
						source={details.image.original}
						name={details.name}
						className='img'
					/>
				</ImageContainerStyled>
				<div className='description'>
					<p className='summary'>{formatSummary(details.summary)}</p>
					<p>
						<FontAwesomeIcon icon={faStar} /> Rating: {details.rating.average}
					</p>
					<p>
						<FontAwesomeIcon icon={faGlobe} /> Country:{' '}
						{details.network?.country.name}
					</p>
					<p>
						{' '}
						<FontAwesomeIcon icon={faPlayCircle} /> Type: {details.type}
					</p>
					<p>
						<FontAwesomeIcon icon={faQuestionCircle} /> Status: {details.status}
					</p>
					<p>
						<FontAwesomeIcon icon={faClock} /> Runtime: {details.runtime}{' '}
						minutes
					</p>
					<p>
						<FontAwesomeIcon icon={faLanguage} /> Language: {details.language}
					</p>
					<p>
						<FontAwesomeIcon icon={faShapes} /> Genres:{' '}
						{formatWithComma(details.genres)}
					</p>
					<p>
						<FontAwesomeIcon icon={faFilm} /> Premeried on {details.premiered}
					</p>
					{isUserSignedIn && (
						<div>
							<button
								className='gradient-container'
								onClick={favoriteClickHandler}>
								{favoriteText}
							</button>
							<button className='gradient-container'>Recommend</button>
						</div>
					)}
				</div>
			</StyledDetails>
		</>
	)
}

const StyledDetails = styled.div`
	display: flex;

	.description {
		p {
			width: 100%;
			line-height: 150%;
			margin-bottom: 0.5em;
			font-weight: 600;

			svg path {
				color: ${colors.primaryColorThree};
			}
		}

		.summary {
			font-weight: 400;
		}
	}

	button {
		padding: 0.6em 0.8em;
		margin-top: 0.5em;
		margin-right: 2em;
	}
`

const ImageContainerStyled = styled(StyledImageContainer)`
	min-width: 400px;
	max-width: 450px;
	height: 500px;
	margin-right: 2em;
`

export default DetailedMovieContent
