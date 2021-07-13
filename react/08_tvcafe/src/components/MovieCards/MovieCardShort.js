import React from 'react'
import styled from 'styled-components'

// utils
import { colors } from '../GlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const MovieCardShort = ({ number }) => {
	return (
		<>
			<StyledMovieCard>
				<div className='img'>{number}</div>
				<StyledShortDetails>
					<h4>Long Movie Title</h4>
					<p className='gradient-text'>Action, Thiller, Romance</p>
					<div className='rating'>
						<FontAwesomeIcon icon={faStar} />
						<p>8.4</p>
					</div>
				</StyledShortDetails>
			</StyledMovieCard>
		</>
	)
}

export const StyledMovieCard = styled.div`
	width: 250px;
	min-height: 400px;
	margin: 0 0.5em;

	.img {
		height: 350px;
		background: black;
	}
`

export const StyledShortDetails = styled.div`
	margin-top: 0.5em;
	h4 {
		font-weight: 600;
		line-height: 150%;
	}

	p {
		font-weight: 300;
		line-height: 150%;
	}

	.rating {
		display: flex;
		align-items: baseline;
		svg path {
			color: ${colors.primaryColorThree};
		}

		p {
			margin-left: 6px;
			font-weight: 700;
		}
	}
`

export default MovieCardShort
