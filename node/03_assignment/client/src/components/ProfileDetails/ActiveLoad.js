import React, { useEffect, useState } from 'react'
import { useLoad } from '../../contexts/LoadContext'
import { getToken } from '../../utils/localStorageConfig'
import { formatDate } from '../../utils/formatDate'

const ActiveLoad = () => {
	const [load, setLoad] = useState(null)
	const { getActiveLoad, iterateToNextState } = useLoad()
	const token = getToken()

	const iterateHandle = async () => {
		await iterateToNextState(token)
		window.location.reload()
	}

	useEffect(() => {
		const getLoad = async () => {
			const { data } = await getActiveLoad(token)
			setLoad(data.load)
		}
		getLoad()
	}, [getActiveLoad, token])

	return (
		<div className='mt-5'>
			{load ? (
				<>
					<h3 className='text-center fw-bold mb-5'>Your active load</h3>
					<div className='d-flex justify-content-between mx-5 pb-5'>
						<div>
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
							<button className='btn btn-outline-primary' onClick={iterateHandle}>
								Iterate to the next Load state
							</button>
						</div>
						<div>
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
						</div>
					</div>
				</>
			) : (
				<h5 className='text-center fw-bold'>You currently have no active loads</h5>
			)}
		</div>
	)
}

export default ActiveLoad
