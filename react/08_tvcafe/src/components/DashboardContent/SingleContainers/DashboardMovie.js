import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// components
import ImageContainer, {
	StyledImageContainer,
} from '../../DetailedMovie/ImageContainer'

// utils
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../GlobalStyles'
import { formatWithComma } from '../../../utils/formatString'

const DashboardMovie = ({ movie, isSearched }) => {
	return (
		<>
			{movie.image && (
				<StyledDashboardMovie>
					<StyledContainerForImage>
						<ImageContainer
							source={isSearched ? movie.image.medium : movie.image}
							name={movie.name}
						/>
					</StyledContainerForImage>

					<StyledDetailsContainer>
						<p>
							<Link to={`shows/${movie.id || movie.movieId}`}>
								{movie.name}
							</Link>
						</p>
						<p className='gradient-text'>
							{isSearched ? formatWithComma(movie.genres) : movie.genres}
						</p>
						{movie.rating && (
							<p>
								<FontAwesomeIcon icon={faStar} />
								{isSearched ? movie.rating.average : movie.rating}
							</p>
						)}
						{movie.friendName && (
							<p className='friend-recommend'>
								recommended by {movie.friendName}
							</p>
						)}
					</StyledDetailsContainer>
				</StyledDashboardMovie>
			)}
		</>
	)
}

const StyledDashboardMovie = styled.div`
	display: flex;
	margin-bottom: 1.5em;
	padding: 0 1em;
`

const StyledDetailsContainer = styled.div`
	padding: 0 1em;

	p,
	a {
		font-weight: 700;
		line-height: 150%;
	}

	a {
		font-family: 'Open Sans', sans-serif;
		letter-spacing: 0.5px;
	}

	.gradient-text {
		font-weight: 400;
	}

	svg {
		margin-right: 0.3rem;

		path {
			color: ${colors.primaryColorThree};
		}
	}

	.friend-recommend {
		font-weight: 500;
		opacity: 0.8;
	}
`

const StyledContainerForImage = styled(StyledImageContainer)`
	width: 120px;
	height: 100px;
	border-radius: 2px;
`

export default DashboardMovie
