import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// utils
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../GlobalStyles'

const DashboardUser = ({ user }) => {
	return (
		<div>
			<p>{user.name}</p>
		</div>
	)
}

export default DashboardUser
