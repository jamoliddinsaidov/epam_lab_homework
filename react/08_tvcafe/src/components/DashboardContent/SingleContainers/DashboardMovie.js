import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// components
import ImageContainer, {
	StyledImageContainer,
} from '../../MovieCards/ImageContainer'

// utils
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../GlobalStyles'

const DashboardMovie = ({ movie }) => {
	return (
		<StyledDashboardMovie>
			<StyledContainerForImage>
				<ImageContainer source={movie.image} name={movie.name} />
			</StyledContainerForImage>

			<StyledDetailsContainer>
				<p>
					<Link to={`shows/${movie.id}`}>{movie.name}</Link>
				</p>
				<p className='gradient-text'>{movie.genres}</p>
				<p>
					<FontAwesomeIcon icon={faStar} />
					{movie.rating}
				</p>
			</StyledDetailsContainer>
		</StyledDashboardMovie>
	)
}

const StyledDashboardMovie = styled.div`
	display: flex;
	margin-bottom: 1.5em;
	padding: 0 1em;
`

const StyledDetailsContainer = styled.div`
	padding: 1em;

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
`

const StyledContainerForImage = styled(StyledImageContainer)`
	width: 120px;
	height: 100px;
	border-radius: 2px;
`

export default DashboardMovie
