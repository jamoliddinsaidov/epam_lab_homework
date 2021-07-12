import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// utils
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { Container, colors } from '../GlobalStyles'

// components
import SignedInLinks from './SignedInLinks'

const Nav = () => {
	return (
		<ContainerNav>
			<StyledNav>
				<StyledLogo>
					<FontAwesomeIcon icon={faFilm} size='2x' />
					<Link to='/'> tvcafé</Link>
				</StyledLogo>

				<SignedInLinks />
			</StyledNav>
		</ContainerNav>
	)
}

const ContainerNav = styled.nav``

const StyledNav = styled(Container)`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	padding: 1em 0;

	a {
		letter-spacing: 2px;
	}
`

const StyledLogo = styled.div`
	a {
		font-size: 2.2rem;
		font-weight: 900;
		margin-left: 0.1em;

		&:active,
		&:hover,
		&:focus {
			color: ${colors.textColor};
			border-color: none;
			padding: 0;
		}
	}
`

export default Nav
