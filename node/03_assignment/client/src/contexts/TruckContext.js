import React, { useContext } from 'react'
import axios from 'axios'

const TruckContext = React.createContext()

export const TruckProvider = ({ children }) => {
	// functions
	const getTrucks = async (token) => {
		return await axios.get('http://localhost:8080/api/trucks', {
			headers: {
				Authorization: `JWT ${token}`,
			},
		})
	}

	const createTruck = async (token, type) => {
		return await axios.post(
			'http://localhost:8080/api/trucks',
			{ type },
			{
				headers: {
					Authorization: `JWT ${token}`,
				},
			}
		)
	}

	const values = { createTruck, getTrucks }
	return <TruckContext.Provider value={values}>{children}</TruckContext.Provider>
}

export const useTruck = () => useContext(TruckContext)