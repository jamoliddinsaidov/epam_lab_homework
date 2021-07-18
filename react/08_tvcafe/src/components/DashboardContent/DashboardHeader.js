import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// utils
import { colors } from '../GlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFilm,
	faUserFriends,
	faBell,
} from '@fortawesome/free-solid-svg-icons'

const Header = ({ user }) => {
	return (
		<StyledHeader>
			<h2>Welcome, {user.name}</h2>
			<div>
				<NavLink to='/dashboard/movies'>
					<FontAwesomeIcon icon={faFilm} size='2x' />
				</NavLink>
				<NavLink to='/dashboard/friends'>
					<FontAwesomeIcon icon={faUserFriends} size='2x' />
				</NavLink>
				<NavLink to='/dashboard/notifications'>
					<FontAwesomeIcon icon={faBell} size='2x' />
				</NavLink>
			</div>
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
		margin-left: 1em;

		path {
			transition: color 200ms ease-in-out;
		}
	}

	a {
		border-bottom: none;

		&.active,
		&:hover,
		&:focus {
			border-bottom: none;

			path {
				color: ${colors.primaryColorTwo};
			}
		}
	}
`

export default Header
