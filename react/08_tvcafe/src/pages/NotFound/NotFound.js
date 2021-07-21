import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// utils
import { colors } from '../../components/GlobalStyles'

const NotFound = () => {
	return (
		<StyledNotFound>
			<div className='line'></div>
			<div className='details'>
				<h2 className='gradient-text'>404</h2>
				<p>Looks like the page you've been looking for doesn't exist</p>
				<Link to='/' className='gradient-container'>
					Go Back
				</Link>
			</div>
		</StyledNotFound>
	)
}

const StyledNotFound = styled.div`
	width: 50%;
	border-radius: 6px;
	background: ${colors.bgNavColor};
	margin: 5em auto 0;

	.details {
		text-align: center;
		min-height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h2 {
		font-size: 6rem;
	}

	p {
		font-size: 1rem;
		margin-bottom: 3em;
		margin-top: 1em;
		opacity: 0.7;
	}

	.gradient-container {
		font-size: 0.9rem;
		padding: 0.8em 3em;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		opacity: 0.9;
		transition: 500ms ease;
		transition-property: opacity;
		border-radius: 6px;
		box-shadow: none;

		&:hover,
		&:focus {
			opacity: 1;
			color: ${colors.textColor};
		}
	}

	@media screen and (max-width: 1024px) {
		width: 60%;
	}

	@media screen and (max-width: 768px) {
		width: 75%;
	}

	@media screen and (max-width: 600px) {
		width: 85%;
	}

	@media screen and (max-width: 480px) {
		width: 95%;
	}
`

export default NotFound
