import React, { useState } from 'react'
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
import { getNotificationsLength } from '../../utils/localStorageConfig'

const Header = ({ user }) => {
	// states
	const [notificationsLength, setNotificationsLength] = useState(
		getNotificationsLength()
	)

	// handlers
	const notificationHandler = () => {
		setNotificationsLength(0)
	}

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
				<NavLink to='/dashboard/notifications' onClick={notificationHandler}>
					<FontAwesomeIcon icon={faBell} size='2x' />
					{notificationsLength === 0 ? '' : <div className='notify'></div>}
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
		position: relative;

		&.active,
		&:hover,
		&:focus {
			border-bottom: none;

			path {
				color: ${colors.primaryColorTwo};
			}
		}

		.notify {
			position: absolute;
			top: -10px;
			right: -2px;
			width: 12px;
			height: 12px;
			border-radius: 50%;
			background: ${colors.primaryColorTwo};
			box-shadow: 0 0 3px 0.5px ${colors.primaryColorTwo};
		}
	}
`

export default Header
