import React, { useState, useRef } from 'react'
import { useLoad } from '../../contexts/LoadContext'
import { getToken } from '../../utils/localStorageConfig'

// components
import LoadForm from '../../components/Forms/LoadForm'

const CreateLoad = () => {
	// refs & states
	const nameRef = useRef(null)
	const payloadRef = useRef(null)
	const pickupRef = useRef(null)
	const deliveryRef = useRef(null)
	const widthRef = useRef(null)
	const heightRef = useRef(null)
	const lengthRef = useRef(null)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')
	const { createLoad } = useLoad()

	// handlers
	const handleSubmit = async (e) => {
		e.preventDefault()
		const token = getToken()
		const load = {
			name: nameRef.current.value,
			payload: payloadRef.current.value,
			pickup_address: pickupRef.current.value,
			delivery_address: deliveryRef.current.value,
			dimensions: {
				width: widthRef.current.value,
				length: lengthRef.current.value,
				height: heightRef.current.value,
			},
		}

		try {
			const { data } = await createLoad(token, load)
			setError('')
			setSuccess(data.message)

			nameRef.current.value = ''
			payloadRef.current.value = ''
			pickupRef.current.value = ''
			deliveryRef.current.value = ''
			widthRef.current.value = ''
			lengthRef.current.value = ''
			heightRef.current.value = ''

			setTimeout(() => {
				setSuccess('')
			}, 800)
		} catch (error) {
			setSuccess('')
			setError(error.message)
		}
	}

	const title = 'Create a new load'
	return (
		<LoadForm
			title={title}
			handleSubmit={handleSubmit}
			error={error}
			success={success}
			nameRef={nameRef}
			payloadRef={payloadRef}
			pickupRef={pickupRef}
			deliveryRef={deliveryRef}
			widthRef={widthRef}
			heightRef={heightRef}
			lengthRef={lengthRef}
		/>
	)
}

export default CreateLoad
