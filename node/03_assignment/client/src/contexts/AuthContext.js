import React, { useContext } from 'react'
import axios from 'axios'

const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
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

	const values = {
		signup,
		signin,
		forgotPassword,
	}

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
