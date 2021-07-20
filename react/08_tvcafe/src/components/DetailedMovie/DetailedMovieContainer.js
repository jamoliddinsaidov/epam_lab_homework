import React, { useState } from 'react'
import styled from 'styled-components'

// components
import ImageContainer, { StyledImageContainer } from './ImageContainer'
import MovieDetails from './MovieDetails'
import FavoriteRecommendButtons from './FavoriteRecommendButtons'
import RecommendMoviePopup from './RecommendMoviePopup'

// utils
import { colors } from '../GlobalStyles'
import { checkIsUserSignedIn } from '../../utils/localStorageConfig'

const DetailedMovieContainer = ({ details }) => {
	// states
	const isUserSignedIn = checkIsUserSignedIn()
	const [isRecommendClicked, setIsRecommendClicked] = useState(false)

	return (
		<StyledDetails>
			<ImageContainerStyled>
				<ImageContainer source={details.image.original} name={details.name} />
			</ImageContainerStyled>
			<div className='description'>
				<MovieDetails details={details} />
				{isUserSignedIn && (
					<div>
						<FavoriteRecommendButtons
							details={details}
							isRecommendClicked={isRecommendClicked}
							setIsRecommendClicked={setIsRecommendClicked}
						/>
					</div>
				)}
			</div>

			<RecommendMoviePopup
				details={details}
				isRecommendClicked={isRecommendClicked}
				setIsRecommendClicked={setIsRecommendClicked}
			/>
		</StyledDetails>
	)
}

const StyledDetails = styled.div`
	display: flex;
	animation: appear 300ms ease;

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

export default DetailedMovieContainer
