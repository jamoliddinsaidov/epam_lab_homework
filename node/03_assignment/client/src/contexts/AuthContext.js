import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { getToken } from '../utils/localStorageConfig'

const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
	// states
	const [isSignedIn, setIsSignedIn] = useState(false)
	const [user, setUser] = useState({})

	// functions
	const signup = async (email, password, role) => {
		return await axios.post(`http://localhost:8080/api/auth/register`, { email, password, role })
	}

	const signin = async (email, password) => {
		return await axios.post(`http://localhost:8080/api/auth/login`, { email, password })
	}

	const forgotPassword = async (email) => {
		return await axios.post('http://localhost:8080/api/auth/forgot_password', { email })
	}

	useEffect(() => {
		async function fetchData() {
			const token = getToken()
			const { data } = await axios.get('http://localhost:8080/api/users/me', {
				headers: {
					Authorization: `JWT ${token}`,
				},
			})
			setUser(data.user)
		}

		if (isSignedIn) fetchData()
	}, [isSignedIn])

	const values = {
		user,
		signup,
		signin,
		forgotPassword,
		setIsSignedIn,
	}

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
