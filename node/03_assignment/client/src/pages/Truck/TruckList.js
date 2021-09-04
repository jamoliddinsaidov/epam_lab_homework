import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTruck } from '../../contexts/TruckContext'
import { getToken } from '../../utils/localStorageConfig'
import { formatDate } from '../../utils/formatDate'

const TruckList = () => {
	const { getTrucks } = useTruck()
	const [trucks, setTrucks] = useState([])

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
				<table className='table'>
					<thead>
						<tr>
							<th>N</th>
							<th>Created by</th>
							<th>Assigned to</th>
							<th>Type</th>
							<th>Status</th>
							<th>Created date</th>
							<th></th>
							<th></th>
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
									<Link to={`/trucks/${truck._id}`} className='btn btn-outline-dark'>
										<i class='bi bi-eye'></i>
									</Link>
								</td>
								<td>
									<Link to={`/trucks/edit/${truck._id}`} className='btn btn-outline-dark'>
										<i class='bi bi-pencil'></i>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default TruckList
