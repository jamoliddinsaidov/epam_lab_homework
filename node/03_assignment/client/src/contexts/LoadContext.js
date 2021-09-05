import React, { useContext } from 'react'
import axios from 'axios'

const LoadContext = React.createContext()

export const LoadProvider = ({ children }) => {
	// functions
	const getLoads = async (token) => {
		return await axios.get('http://localhost:8080/api/loads', {
			headers: {
				Authorization: `JWT ${token}`,
			},
		})
	}

	const createLoad = async (token, load) => {
		return await axios.post('http://localhost:8080/api/loads', load, {
			headers: {
				Authorization: `JWT ${token}`,
			},
		})
	}

	const deleteLoad = async (token, id) => {
		return await axios.delete(`http://localhost:8080/api/loads/${id}`, {
			headers: {
				Authorization: `JWT ${token}`,
			},
		})
	}

	const values = { createLoad, getLoads, deleteLoad }
	return <LoadContext.Provider value={values}>{children}</LoadContext.Provider>
}

export const useLoad = () => useContext(LoadContext)
