import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

// utils
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { Container, colors } from '../GlobalStyles'
import { checkIsUserSignedIn } from './utils/localStorageConfig'

// components
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Nav = () => {
	// states
	const [isSignedIn, setIsSignedIn] = useState(false)
	const location = useLocation()

	useEffect(() => {
		setIsSignedIn(checkIsUserSignedIn())
	}, [location, setIsSignedIn])

	return (
		<NavContainer>
			<StyledNav>
				<StyledLogo>
					<FontAwesomeIcon icon={faFilm} size='2x' />
					<Link to='/'> tvcafé</Link>
				</StyledLogo>

				{isSignedIn ? <SignedInLinks /> : <SignedOutLinks />}
			</StyledNav>
		</NavContainer>
	)
}

const NavContainer = styled.nav`
	background: ${colors.bgNavColor};
	box-shadow: 0 0 10px 2px ${colors.bgNavColor};
	padding: 0.5em 0 1em;
	width: 100%;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 100;
`

const StyledNav = styled(Container)`
	display: flex;
	align-items: baseline;
	justify-content: space-between;

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
