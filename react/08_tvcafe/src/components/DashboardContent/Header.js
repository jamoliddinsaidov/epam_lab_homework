import React from 'react'
import styled from 'styled-components'

// utils
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const Header = ({ user }) => {
	return (
		<StyledHeader>
			<h2>Welcome, {user.name}</h2>
			<FontAwesomeIcon icon={faBell} size='2x' />
		</StyledHeader>
	)
}

const StyledHeader = styled.div`
	margin: 2em auto;
	display: flex;
	align-items: center;
	justify-content: space-between;

	svg {
		cursor: pointer;
	}
`

export default Header
