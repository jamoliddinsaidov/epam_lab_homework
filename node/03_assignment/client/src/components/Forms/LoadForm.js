import React from 'react'

const LoadForm = ({
	title,
	handleSubmit,
	error,
	success,
	nameRef,
	payloadRef,
	pickupRef,
	deliveryRef,
	widthRef,
	heightRef,
	lengthRef,
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
						<input type='text' className='form-control' ref={nameRef} required />
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Payload
						</span>
						<input type='number' className='form-control' ref={payloadRef} required />
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Pickup address
						</span>
						<input type='text' className='form-control' ref={pickupRef} required />
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Delivery address
						</span>
						<input type='text' className='form-control' ref={deliveryRef} required />
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Width
						</span>
						<input type='number' className='form-control' ref={widthRef} required />
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Height
						</span>
						<input type='number' className='form-control' ref={heightRef} required />
					</div>

					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Length
						</span>
						<input type='number' className='form-control' ref={lengthRef} required />
					</div>

					<button type='submit' className='btn btn-primary mb-3'>
						Create
					</button>
					{success && <div className='text-small form-alert text-center text-success'>{success}</div>}
					{error && <div className='text-small form-alert text-center text-danger'>{error}</div>}
				</form>
			</div>
		</div>
	)
}

export default LoadForm
