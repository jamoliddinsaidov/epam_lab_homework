import React from 'react'
import styled from 'styled-components'

// components
import ImageContainer, { StyledImageContainer } from './ImageContainer'
import MovieDetails from './MovieDetails'
import FavoriteRecommendButtons from './FavoriteRecommendButtons'

// utils
import { colors } from '../../components/GlobalStyles'
import { checkIsUserSignedIn } from '../../utils/localStorageConfig'

const DetailedMovieContent = ({ details }) => {
	const isUserSignedIn = checkIsUserSignedIn()

	return (
		<StyledDetails>
			<ImageContainerStyled>
				<ImageContainer
					source={details.image.original}
					name={details.name}
					className='img'
				/>
			</ImageContainerStyled>
			<div className='description'>
				<MovieDetails details={MovieDetails} />
				{isUserSignedIn && (
					<div>
						<FavoriteRecommendButtons details={details} />
					</div>
				)}
			</div>
		</StyledDetails>
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
