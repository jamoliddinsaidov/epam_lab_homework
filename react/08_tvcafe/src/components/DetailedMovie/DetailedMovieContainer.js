import React, { useState, useEffect } from 'react'
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
	const [showSuccessMsg, setShowSuccessMsg] = useState(false)

	useEffect(() => {
		window.scroll(0, 0)
	}, [isRecommendClicked])

	return (
		<StyledDetails>
			<ImageContainerStyled>
				<ImageContainer source={details.image.original} name={details.name} />
			</ImageContainerStyled>

			<div className='description'>
				<MovieDetails details={details} />
				{showSuccessMsg && (
					<p className='success'>Movie's successfully recommended</p>
				)}
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
				setShowSuccessMsg={setShowSuccessMsg}
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

		.success {
			text-align: left;
		}
	}

	button {
		padding: 0.6em 0.8em;
		margin-top: 0.5em;
		margin-right: 2em;
	}

	@media screen and (max-width: 924px) {
		flex-direction: column;
	}
`

const ImageContainerStyled = styled(StyledImageContainer)`
	min-width: 400px;
	max-width: 450px;
	height: 500px;
	margin-right: 2em;

	@media screen and (max-width: 924px) {
		min-width: 400px;
		max-width: 100%;
		height: 100%;
		margin-right: 0;
		margin-bottom: 2em;
	}

	@media screen and (max-width: 480px) {
		min-width: 280px;
	}
`

export default DetailedMovieContainer
