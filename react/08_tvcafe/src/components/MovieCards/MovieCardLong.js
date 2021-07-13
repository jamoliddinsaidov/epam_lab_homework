import React from 'react'
import styled from 'styled-components'

// utils
import { colors } from '../GlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { StyledShortDetails } from './MovieCardShort'

const MovieCardLong = ({ number }) => {
	return (
		<>
			<StyledMovieCard>
				<div className='img'>{number}</div>

				<StyledLongDetails>
					<h4>Long Movie Title</h4>
					<p className='gradient-text'>Action, Thiller, Romance</p>

					<div className='rating'>
						<FontAwesomeIcon icon={faStar} />
						<p>8.4</p>
						<p className='language'>Language</p>
					</div>

					<p className='description'>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters
					</p>
				</StyledLongDetails>
			</StyledMovieCard>
		</>
	)
}

const StyledMovieCard = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 50%;
	margin-bottom: 2em;

	.img {
		width: 200px;
		height: 270px;
		background: black;
	}
`

const StyledLongDetails = styled(StyledShortDetails)`
	flex: 1;
	margin-left: 1em;
	margin-right: 2em;
	align-self: flex-start;

	.rating {
		margin: 0.5em 0;

		p {
			font-weight: 700;
		}

		.language {
			padding: 0.3em;
			border: 1px solid ${colors.bgNavColor};
			border-radius: 5px;
			font-size: 0.9rem;
			font-weight: 400;
		}
	}
`

export default MovieCardLong
