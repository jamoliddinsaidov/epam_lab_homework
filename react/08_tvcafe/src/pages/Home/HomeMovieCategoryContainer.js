import React from 'react'
import styled from 'styled-components'

// components
import HeaderTitle from '../../components/Titles/HeaderTitle'

// utils
import { colors, Container } from '../../components/GlobalStyles'

const HomeMovieCategoryContainer = ({ isActive, setIsActive }) => {
	// handlers
	const clickHandler = (e) => {
		const text = e.target.innerHTML
		switch (text) {
			case 'popular shows':
				setIsActive((prevState) => ({
					...prevState,
					popularBtn: true,
					animationBtn: false,
					helpBtn: false,
				}))
				break
			case 'animations':
				setIsActive((prevState) => ({
					...prevState,
					popularBtn: false,
					animationBtn: true,
					helpBtn: false,
				}))
				break
			case 'help finding favorites':
				setIsActive((prevState) => ({
					...prevState,
					popularBtn: false,
					animationBtn: false,
					helpBtn: true,
				}))
				break
			default:
				return isActive
		}
	}

	return (
		<StyledHomeMovieCategoryContainer>
			<div>
				<HeaderTitle title='we offer' />
			</div>

			<div className='line'></div>

			<StyledHomeOptions>
				<button
					onClick={clickHandler}
					className={isActive.popularBtn ? 'active' : ''}>
					popular shows
				</button>
				<button
					onClick={clickHandler}
					className={isActive.animationBtn ? 'active' : ''}>
					animations
				</button>
				<button
					onClick={clickHandler}
					className={isActive.helpBtn ? 'active' : ''}>
					help finding favorites
				</button>
			</StyledHomeOptions>
		</StyledHomeMovieCategoryContainer>
	)
}

const StyledHomeMovieCategoryContainer = styled.div`
	background: ${colors.bgNavColor};
	padding: 1.5em 0;
`
const StyledHomeOptions = styled(Container)`
	padding: 1.5em 0 0.5em;

	button {
		margin-right: 1em;
		text-transform: uppercase;
		font-weight: 300;
		font-size: 1.2rem;
		cursor: pointer;
		border-radius: 0;
		border: none;
		background: transparent;
		outline: none;
		font-family: 'Source Sans Pro', sans-serif;
		border-bottom: 1px solid transparent;
		transition: 300ms ease-in-out;
		transition-property: color, padding, border-color;

		&:hover,
		&:focus,
		&.active {
			color: ${colors.primaryColorTwo};
		}

		&.active {
			border-color: ${colors.primaryColorTwo};
			padding: 0 0.5em;
		}
	}

	@media screen and (max-width: 924px) {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;

		button {
			margin-right: 0;
		}
	}
`

export default HomeMovieCategoryContainer
