import React from 'react'
import styled from 'styled-components'

// utils
import {
	checkLocalStorageCurrentUser,
	recommendMovie,
} from '../../utils/localStorageConfig'
import { colors } from '../GlobalStyles'
import { formatWithComma } from '../../utils/formatString'

const RecommendMoviePopup = ({
	isRecommendClicked,
	setIsRecommendClicked,
	details,
}) => {
	// states
	const user = checkLocalStorageCurrentUser()

	// handlers
	const closeHandler = () => {
		setIsRecommendClicked(!isRecommendClicked)
		document.body.style.overflow = 'visible'
	}

	const recommendClickHandler = (friendId) => {
		const movieDetails = {
			movieId: details.id,
			name: details.name,
			image: details.image.medium,
			rating: details.rating.average,
			genres: formatWithComma(details.genres),
			friendName: user.name,
			friendId,
		}

		// adding the recommended movie to user's movielist
		recommendMovie(movieDetails)

		// closing the popup
		setIsRecommendClicked(!isRecommendClicked)
		document.body.style.overflow = 'visible'
	}

	return (
		<StyledRecommendContainer className={isRecommendClicked ? 'popup' : ''}>
			<div>
				<h3>Choose one of your friends to recommend</h3>
				<p onClick={closeHandler}>x</p>
				{user.friends.map((friend) => (
					<h4 key={friend.id} onClick={() => recommendClickHandler(friend.id)}>
						{friend.name}
					</h4>
				))}
				{user.friends.length === 0 ? (
					<h4>Seems like you are not following anyone...</h4>
				) : (
					''
				)}
			</div>
		</StyledRecommendContainer>
	)
}

const StyledRecommendContainer = styled.div`
	opacity: 0;
	background: rgba(0, 0, 0, 0.7);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 120vh;
	pointer-events: none;
	transition: all 300ms ease;
	display: flex;
	align-items: center;
	justify-content: center;

	div {
		position: relative;
		background: ${colors.bgNavColor};
		width: 40%;
		border-radius: 6px;
		padding: 2em;
		border: 2px solid ${colors.primaryColorTwo};
		box-shadow: 0 0 4px 1px ${colors.primaryColorTwo};
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	h3 {
		font-weight: 300;
		font-size: 1.5rem;
		margin-bottom: 1em;
	}

	h4 {
		font-weight: 600;
		font-size: 1.3rem;
		margin-bottom: 0.5em;
		cursor: pointer;
		border-bottom: 1px solid transparent;
		transition: border-bottom 300ms ease;

		&:hover,
		&:focus {
			border-bottom: 1px solid ${colors.textColor};
		}
	}

	p {
		position: absolute;
		top: 0;
		right: 0;
		background: ${colors.primaryColorTwo};
		padding: 0.3em 0.7em;
		font-weight: 900;
		border-bottom-left-radius: 50%;
		cursor: pointer;
		box-shadow: 0 0 4px 2px transparent;
		transition: box-shadow 300ms ease;

		&:hover,
		&:focus {
			box-shadow: 0 0 2px 1px ${colors.primaryColorTwo};
		}
	}

	&.popup {
		opacity: 1;
		pointer-events: all;
		z-index: 100;
	}
`

export default RecommendMoviePopup
