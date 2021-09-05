import React, { useRef, useState, useEffect } from 'react'
import { useTruck } from '../../contexts/TruckContext'
import { getToken } from '../../utils/localStorageConfig'
import { useParams } from 'react-router-dom'

// components
import TruckForm from '../../components/Forms/TruckForm'

const EditTruck = () => {
	const truckRef = useRef(null)
	const { editTruck, getTruckById } = useTruck()
	const [success, setSuccess] = useState('')
	const [error, setError] = useState('')
	const [type, setType] = useState('')
	const { id } = useParams()

	const handleSubmit = async (e) => {
		e.preventDefault()

		const type = truckRef.current.value
		const token = getToken()

		try {
			const { data } = await editTruck(token, type, id)
			setError('')
			setSuccess(data.message + ' Refresh to see changes.')

			setTimeout(() => {
				setSuccess('')
			}, 800)
		} catch (error) {
			setSuccess('')
			setError(error.message)
		}
	}

	const title = 'Edit type of the truck'

	useEffect(() => {
		const getTruckType = async () => {
			const token = getToken()
			const { data } = await getTruckById(token, id)
			setType(data.truck.type)
		}

		getTruckType()
	}, [getTruckById, id])

	return (
		<TruckForm
			title={title}
			truckRef={truckRef}
			handleSubmit={handleSubmit}
			error={error}
			success={success}
			type={type}
		/>
	)
}

export default EditTruck
