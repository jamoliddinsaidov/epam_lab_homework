import React, { useRef, useState } from 'react'
import { useTruck } from '../../contexts/TruckContext'
import { getToken } from '../../utils/localStorageConfig'

// components
import TruckForm from '../../components/Forms/TruckForm'

const CreateTruck = () => {
	const truckRef = useRef(null)
	const { createTruck } = useTruck()
	const [success, setSuccess] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()

		const type = truckRef.current.value
		const token = getToken()

		try {
			const { data } = await createTruck(token, type)
			setError('')
			setSuccess(data.message)

			setTimeout(() => {
				setSuccess('')
			}, 2000)
		} catch (error) {
			setSuccess('')
			setError(error.message)
		}
	}

	const title = 'Create a new truck'

	return <TruckForm title={title} truckRef={truckRef} handleSubmit={handleSubmit} error={error} success={success} />
}

export default CreateTruck
