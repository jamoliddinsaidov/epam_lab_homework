import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTruck } from '../../contexts/TruckContext'
import { getToken } from '../../utils/localStorageConfig'
import { formatDate } from '../../utils/formatDate'

const TruckList = () => {
	const headers = [`#`, 'Created by', 'Assigned to', 'Type', 'Status', 'Created date', 'Assign', 'Edit', 'Delete']
	const { getTrucks, deleteTruck, assignTruck } = useTruck()
	const [trucks, setTrucks] = useState([])
	const [success, setSuccess] = useState('')
	const [error, setError] = useState('')

	// handlers
	const deleteHandler = async (e) => {
		const token = getToken()
		const id = e.target.getAttribute('truck-id')

		try {
			const { data } = await deleteTruck(token, id)
			setError('')
			setSuccess(data.message)

			setTimeout(() => {
				setSuccess('')
				window.location.reload()
			}, 500)
		} catch (error) {
			setSuccess('')
			setError('Something went wrong, please try again.')

			setTimeout(() => {
				setError('')
			}, 500)
		}
	}

	const assignHandler = async (e) => {
		const token = getToken()
		const id = e.target.getAttribute('truck-id')

		try {
			const { data } = await assignTruck(token, id)
			setError('')
			setSuccess(data.message)

			setTimeout(() => {
				setSuccess('')
				window.location.reload()
			}, 500)
		} catch (error) {
			setSuccess('')
			setError('You already have an assigned truck.')

			setTimeout(() => {
				setError('')
			}, 500)
		}
	}

	useEffect(() => {
		const fetchTrucks = async () => {
			const { data } = await getTrucks(getToken())
			setTrucks(data.trucks)
		}
		fetchTrucks()
	}, [getTrucks])

	return (
		<div className='container'>
			{trucks.length > 0 && (
				<>
					<h2 className='text-center my-4 fw-bold'>The list of trucks</h2>

					{success && <div className='text-small form-alert text-center text-success my-3'>{success}</div>}
					{error && <div className='text-small form-alert text-center text-danger my-3'>{error}</div>}

					<table className='table'>
						<thead>
							<tr>
								{headers.map((header, idx) => (
									<th key={idx}>{header}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{trucks.map((truck, idx) => (
								<tr key={idx}>
									<td>{idx + 1}</td>
									<td>{truck.created_by}</td>
									<td>{truck.assigned_to === null ? 'None' : truck.assigned_to}</td>
									<td>{truck.type}</td>
									<td>{truck.status}</td>
									<td>{formatDate(truck.created_date)}</td>
									<td>
										<button
											className={`btn btn-outline-dark ${truck.assigned_to ? 'active' : ''}`}
											truck-id={truck._id}
											onClick={assignHandler}>
											<i className='bi bi-truck'></i>
										</button>
									</td>
									<td>
										<Link
											className={`btn btn-outline-dark ${truck.assigned_to ? 'disabled' : ''}`}
											to={`/trucks/edit/${truck._id}`}>
											<i className='bi bi-pencil'></i>
										</Link>
									</td>
									<td>
										<button
											className='btn btn-outline-dark'
											truck-id={truck._id}
											onClick={deleteHandler}
											disabled={truck.assigned_to ? true : false}>
											<i className='bi bi-trash'></i>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			)}
		</div>
	)
}

export default TruckList
