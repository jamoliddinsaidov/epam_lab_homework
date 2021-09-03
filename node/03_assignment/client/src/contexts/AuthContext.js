import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
	const signup = async (email, password) => {
		return await axios.post(`${process.env.BASE_URL}/api/auth/register`, { email, password })
	}

	const login = async (email, password) => {
		return await axios.post(`${process.env.BASE_URL}/api/auth/login`, { email, password })
	}

	const values = {
		signup,
		login,
	}

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
