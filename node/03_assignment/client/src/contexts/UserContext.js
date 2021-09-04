import React, { useContext } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
	// functions
	const getUser = async (token) => {
		return await axios.get('http://localhost:8080/api/users/me', {
			headers: {
				Authorization: `JWT ${token}`,
			},
		})
	}

	const values = {
		getUser,
	}

	return <UserContext.Provider value={values}> {children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
