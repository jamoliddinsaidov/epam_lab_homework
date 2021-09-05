import React, { useState, useEffect } from 'react'
import { useLoad } from '../../contexts/LoadContext'
import { getToken } from '../../utils/localStorageConfig'
import { useParams } from 'react-router-dom'

// components
import LoadForm from '../../components/Forms/LoadForm'

const EditLoad = () => {
	//  states
	const [name, setName] = useState('')
	const [payload, setPayload] = useState(0)
	const [pickup, setPickup] = useState('')
	const [delivery, setDelivery] = useState('')
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)
	const [length, setLength] = useState(0)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')
	const { getLoadById, editLoad } = useLoad()
	const { id } = useParams()
	const token = getToken()

	// handlers
	const handleSubmit = async (e) => {
		e.preventDefault()
		const newLoad = {
			name,
			payload,
			pickup_address: pickup,
			delivery_address: delivery,
			dimensions: {
				width,
				length,
				height,
			},
		}

		try {
			const { data } = await editLoad(token, newLoad, id)
			setError('')
			setSuccess(data.message)

			setTimeout(() => {
				setSuccess('')
			}, 800)
		} catch (error) {
			setSuccess('')
			setError(error.message)
		}
	}

	useEffect(() => {
		const getLoad = async () => {
			const { data } = await getLoadById(token, id)
			const { name, payload, pickup_address, delivery_address } = data.load
			setName(name)
			setPayload(payload)
			setPickup(pickup_address)
			setDelivery(delivery_address)
			setWidth(data.load.dimensions.width)
			setHeight(data.load.dimensions.height)
			setLength(data.load.dimensions.length)
		}
		getLoad()
	}, [getLoadById, id, token])

	const title = 'Edit the load'
	return (
		<LoadForm
			title={title}
			handleSubmit={handleSubmit}
			error={error}
			success={success}
			name={name}
			setName={setName}
			payload={payload}
			setPayload={setPayload}
			pickup={pickup}
			setPickup={setPickup}
			delivery={delivery}
			setDelivery={setDelivery}
			width={width}
			setWidth={setWidth}
			height={height}
			setHeight={setHeight}
			length={length}
			setLength={setLength}
			isEdit={true}
		/>
	)
}

export default EditLoad
