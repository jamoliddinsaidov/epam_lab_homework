import React from 'react'

const LoadForm = ({
	title,
	handleSubmit,
	success,
	error,
	name,
	setName,
	payload,
	setPayload,
	pickup,
	setPickup,
	delivery,
	setDelivery,
	width,
	setWidth,
	height,
	setHeight,
	length,
	setLength,
	isEdit,
}) => {
	return (
		<div className='my-5 d-flex flex-column align-items-center justify-content-center'>
			<div className='container my-3 sign_in_container'>
				<h2 className='text-center fw-bold'>{title}</h2>

				<form className='mt-5 form' onSubmit={handleSubmit}>
					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Name
						</span>
						<input
							type='text'
							className='form-control'
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Payload
						</span>
						<input
							type='number'
							className='form-control'
							required
							value={payload}
							onChange={(e) => setPayload(e.target.value)}
						/>
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Pickup address
						</span>
						<input
							type='text'
							className='form-control'
							required
							value={pickup}
							onChange={(e) => setPickup(e.target.value)}
						/>
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Delivery address
						</span>
						<input
							type='text'
							className='form-control'
							required
							value={delivery}
							onChange={(e) => setDelivery(e.target.value)}
						/>
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Width
						</span>
						<input
							type='number'
							className='form-control'
							required
							value={width}
							onChange={(e) => setWidth(Number(e.target.value))}
						/>
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Height
						</span>
						<input
							type='number'
							className='form-control'
							required
							value={height}
							onChange={(e) => setHeight(e.target.value)}
						/>
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Length
						</span>
						<input
							type='number'
							className='form-control'
							required
							value={length}
							onChange={(e) => setLength(e.target.value)}
						/>
					</div>

					<button type='submit' className='btn btn-primary mb-3'>
						{isEdit ? 'Change' : 'Create'}
					</button>
					{success && <div className='text-small form-alert text-center text-success'>{success}</div>}
					{error && <div className='text-small form-alert text-center text-danger'>{error}</div>}
				</form>
			</div>
		</div>
	)
}

export default LoadForm
