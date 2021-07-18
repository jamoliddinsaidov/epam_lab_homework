import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// components
import DashboardTitle from '../Titles/DashboardTitle'

// utils
import {
	checkLocalStorageCurrentUser,
	clearNotification,
} from '../../utils/localStorageConfig'
import { StyledDashboardUsersList } from '../ListComponents/DashboardUsersList'
import { StyledDashboardUser } from './SingleContainers/DashboardUser'
import { v4 as uuidv4 } from 'uuid'

const DashboardNotificationsContainer = () => {
	const user = checkLocalStorageCurrentUser()
	const notifications = user.notifications

	useEffect(() => {
		// called only when the component is going to unmount
		return () => {
			clearNotification(user.id)
		}
	}, [user.id])

	return (
		<StyledDashboardNotifications>
			<div className='line'></div>
			<DashboardTitle title='Notifications' />
			{notifications?.map((notification, index) => (
				<StyledNotification key={uuidv4()}>
					<p>
						{' '}
						{index + 1}. <span>{notification.friendName}</span> recommends you
						to watch{' '}
						<Link to={`/shows/${notification.movieId}`}>
							{notification.movieName}
						</Link>
					</p>
				</StyledNotification>
			))}
		</StyledDashboardNotifications>
	)
}

const StyledDashboardNotifications = styled(StyledDashboardUsersList)`
	width: 55%;
	margin: 0 auto;
	padding-bottom: 1em;
`

const StyledNotification = styled(StyledDashboardUser)`
	p {
		font-size: 1.1rem;
		opacity: 1;

		span,
		a {
			font-weight: 700;
			font-family: inherit;
		}
	}
`

export default DashboardNotificationsContainer
