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
						<FontAwesomeIcon
							icon={faStar}
							style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
						/>
						<p>8.4</p>
					</div>
				</StyledShortDetails>
			</StyledMovieCard>
		</>
	)
}

const StyledMovieCard = styled.div`
	width: 250px;
	min-height: 350px;
	margin: 0 0.5em;

	.img {
		height: 300px;
		background: black;
	}
`

const StyledShortDetails = styled.div`
	h4 {
		font-weight: 600;
	}

	p {
		font-weight: 300;
	}

	.rating {
		svg path {
			color: ${colors.primaryColorThree};
		}

		p {
			margin-left: 6px;
			display: inline;
			font-weight: 600;
		}
	}
`

export default MovieCardShort
