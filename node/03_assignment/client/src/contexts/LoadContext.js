import React, { useContext } from 'react'
import axios from 'axios'

const LoadContext = React.createContext()

export const LoadProvider = ({ children }) => {
	// functions
	const createLoad = async (token, load) => {
		return await axios.post('http://localhost:8080/api/loads', load, {
			headers: {
				Authorization: `JWT ${token}`,
			},
		})
	}

	const values = { createLoad }
	return <LoadContext.Provider value={values}>{children}</LoadContext.Provider>
}

export const useLoad = () => useContext(LoadContext)
