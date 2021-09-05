import React, { useState, useEffect } from 'react'
import { useUser } from '../../contexts/UserContext'
import { getToken } from '../../utils/localStorageConfig'

// components
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails'
import ActiveLoad from '../../components/ProfileDetails/ActiveLoad'

const Profile = () => {
	const [userRole, setUserRole] = useState(null)
	const { getUserRole } = useUser()
	const token = getToken()

	useEffect(() => {
		const getRole = async () => {
			const role = await getUserRole(token)
			setUserRole(role)
		}
		getRole()
	}, [token, getUserRole])

	return (
		<div className='container profile_container'>
			<ProfileDetails />
			{userRole === 'DRIVER' && <ActiveLoad />}
		</div>
	)
}

export default Profile
