import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledLinks } from './SignedInLinks'

const SignedInLinks = () => {
	return (
		<StyledLinks>
			<li>
				<NavLink to='/signin'>Sign In</NavLink>
			</li>
			<li>
				<NavLink to='/signup'>Sign Up</NavLink>
			</li>
		</StyledLinks>
	)
}

export default SignedInLinks
