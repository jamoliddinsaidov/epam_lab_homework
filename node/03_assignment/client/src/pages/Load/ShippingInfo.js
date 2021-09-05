import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoad } from '../../contexts/LoadContext'
import { getToken } from '../../utils/localStorageConfig'
import { formatDate } from '../../utils/formatDate'

const ShippingInfo = () => {
	const [load, setLoad] = useState(null)
	const [truck, setTruck] = useState(null)
	const token = getToken()
	const { id } = useParams()
	const { getShippingInfo, getLoadById } = useLoad()

	useEffect(() => {
		const getLoad = async () => {
			const { data } = await getLoadById(token, id)
			setLoad(data.load)
			const truckData = await getShippingInfo(token, id)
			setTruck(truckData.data.truck)
		}
		getLoad()
	}, [getShippingInfo, token, id, getLoadById])

	return (
		<div className='container'>
			{load && (
				<div className='loadlist_container'>
					<h3 className='text-center fw-bold my-3'>Shipping Info</h3>
					<p className='fs-5'>
						<span className='fw-bold'>Name: </span>
						{load.name}
					</p>
					<p className='fs-5'>
						<span className='fw-bold'>Created by: </span>
						{load.created_by}
					</p>
					<p className='fs-5'>
						<span className='fw-bold'>Driver: </span>
						{load.assigned_to}
					</p>
					<p className='fs-5'>
						<span className='fw-bold'>Status: </span>
						{load.status}
					</p>
					<p className='fs-5'>
						<span className='fw-bold'>State: </span>
						{load.state}
					</p>
					<p className='fs-5'>
						<span className='fw-bold'>Pickup Address: </span>
						{load.pickup_address}
					</p>
					<p className='fs-5'>
						<span className='fw-bold'>Delivery Address: </span>
						{load.delivery_address}
					</p>
					<p className='fs-5'>
						<span className='fw-bold'>Payload: </span>
						{load.payload}
					</p>
					<p className='fs-5'>
						<span className='fw-bold'>Dimensions (W-H-L): </span>
						{`${load.dimensions.width}-${load.dimensions.height}-${load.dimensions.length}`}
					</p>
					<p className='fs-5'>
						<span className='fw-bold'>Created date: </span>
						{formatDate(load.created_date)}
					</p>

					<div className='logs'>
						<h3 className='text-center fw-bold my-3'>Logs</h3>
						{load.logs.map((log, idx) => (
							<div key={idx}>
								<p className='fs-5'>
									<span className='fw-bold'>Message: </span> {log.message}
								</p>
								<p className='fs-5'>
									<span className='fw-bold'>Created date: </span>
									{formatDate(log.time)}
								</p>
								<hr />
							</div>
						))}
					</div>

					{truck && (
						<div className='truck'>
							<h3 className='text-center fw-bold my-3'>Truck</h3>
							<p className='fs-5'>
								<span className='fw-bold'>Created by: </span>
								{truck.created_by}
							</p>
							<p className='fs-5'>
								<span className='fw-bold'>Assigned to: </span>
								{truck.assigned_to}
							</p>
							<p className='fs-5'>
								<span className='fw-bold'>Type: </span>
								{truck.type}
							</p>
							<p className='fs-5'>
								<span className='fw-bold'>Status: </span>
								{truck.status}
							</p>
							<p className='fs-5'>
								<span className='fw-bold'>Created date: </span>
								{formatDate(truck.created_date)}
							</p>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default ShippingInfo
