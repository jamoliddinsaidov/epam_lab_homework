import React, { useState } from 'react'
import styled from 'styled-components'

// utils
import { colors } from '../../GlobalStyles'
import {
	followFriend,
	unfollowFriend,
	checkIsFollowed,
	checkLocalStorageUsers,
	checkLocalStorageCurrentUser,
} from '../../../utils/localStorageConfig'

const DashboardUser = ({ user, setUser, setUsers, isUserFriends }) => {
	//states
	const isFollowed = checkIsFollowed(user.id)
	const [text, setText] = useState(isFollowed ? 'Unfollow' : 'Follow')

	// handlers
	const followHandler = () => {
		if (text === 'Follow') {
			const values = {
				id: user.id,
				name: user.name,
				isFollowed: true,
			}

			const followed = followFriend(values)

			if (followed) {
				setText('Unfollow')
			}
		} else if (text === 'Unfollow') {
			const unfollowed = unfollowFriend(user.id)

			if (unfollowed) {
				setText('Follow')
			}
		}

		// realtime updating friends list
		setUsers(checkLocalStorageUsers)
		setUser(checkLocalStorageCurrentUser)
	}

	return (
		<StyledDashboardUser>
			<h4 className={isUserFriends ? 'userFriends' : ''}>{user.name}</h4>
			{isUserFriends ? '' : <button onClick={followHandler}>{text}</button>}
			{isUserFriends && <p>followed by you</p>}
		</StyledDashboardUser>
	)
}

export const StyledDashboardUser = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0em 2em;
	margin-bottom: 1em;

	h4 {
		font-size: 1.5em;
		font-weight: 600;
	}

	button {
		background: transparent;
		padding: 0.2em 0.7em;
		border-radius: 0.5em;
		border: 2px solid ${colors.primaryColorTwo};
		font-size: 0.9rem;

		&:hover {
			background: ${colors.primaryColorTwo};
		}
	}

	p {
		opacity: 0.5;
		font-size: 0.8rem;
	}
`

export default DashboardUser
