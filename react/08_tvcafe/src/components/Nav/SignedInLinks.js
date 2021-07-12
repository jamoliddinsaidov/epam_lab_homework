import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SignedInLinks = () => {
	return (
		<StyledLinks>
			<li>
				<NavLink to='/about'>About</NavLink>
			</li>
			<li>
				<NavLink to='/dashboard'>Dashboard</NavLink>
			</li>
			<li>
				<NavLink to='/logout'>Log Out</NavLink>
			</li>
		</StyledLinks>
	)
}

export const StyledLinks = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;

	li {
		margin-left: 2em;
	}

	a {
		text-transform: uppercase;
		font-weight: 300;
	}
`

export default SignedInLinks
