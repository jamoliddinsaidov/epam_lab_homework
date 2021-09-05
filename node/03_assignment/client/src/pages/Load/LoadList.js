import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../contexts/UserContext'
import { useLoad } from '../../contexts/LoadContext'
import { getToken } from '../../utils/localStorageConfig'
import { formatDate } from '../../utils/formatDate'

const LoadList = () => {
	const headers = [
		`#`,
		'Name',
		'Creator',
		'Driver',
		'Status',
		'State',
		'Pickup',
		'Deliver',
		'Payload',
		'W-H-L',
		'Created date',
		'Post',
		'Edit',
		'Delete',
	]
	const { getLoads } = useLoad()
	const { getUserEmail } = useUser()
	const [loads, setLoads] = useState([])
	const [userEmail, setUserEmail] = useState('')
	const [success, setSuccess] = useState('')
	const [error, setError] = useState('')

	// handlers
	useEffect(() => {
		const fetchTrucks = async () => {
			const { data } = await getLoads(getToken())
			setLoads(data.loads)
			const email = await getUserEmail(getToken())
			setUserEmail(email)
		}
		fetchTrucks()
	}, [getUserEmail, getLoads])

	return (
		<div className='container-fluid px-4'>
			{loads.length > 0 && (
				<>
					<h2 className='text-center my-4 fw-bold'>The list of loads</h2>

					{success && <div className='text-small form-alert text-center text-success my-3'>{success}</div>}
					{error && <div className='text-small form-alert text-center text-danger my-3'>{error}</div>}

					<div className='table-responsive'>
						<table className='table table-hover'>
							<thead>
								<tr>
									{headers.map((header, idx) => (
										<th key={idx} scope='col'>
											{header}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{loads.map((load, idx) => (
									<tr key={idx}>
										<th scope='row'>{idx + 1}</th>
										<td>{load.name}</td>
										<td>{userEmail}</td>
										<td>{load.assigned_to === null ? 'None' : ''}</td>
										<td>{load.status}</td>
										<td>{load.state}</td>
										<td>{load.pickup_address}</td>
										<td>{load.delivery_address}</td>
										<td>{load.payload}</td>
										<td>{`${load.dimensions.width}-${load.dimensions.height}-${load.dimensions.length}`}</td>
										<td>{formatDate(load.created_date)}</td>
										<td>
											<button
												className={`btn btn-outline-dark ${load.assigned_to ? 'active' : ''}`}
												truck-id={load._id}>
												<i className='bi bi-truck'></i>
											</button>
										</td>
										<td>
											<Link
												className={`btn btn-outline-dark ${load.assigned_to ? 'disabled' : ''}`}
												to={`/trucks/edit/${load._id}`}>
												<i className='bi bi-pencil'></i>
											</Link>
										</td>
										<td>
											<button
												className='btn btn-outline-dark'
												truck-id={load._id}
												disabled={load.assigned_to ? true : false}>
												<i className='bi bi-trash'></i>
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</>
			)}
		</div>
	)
}

export default LoadList
