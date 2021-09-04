import React from 'react'

const TruckForm = ({ title, truckRef, handleSubmit, success, error }) => {
	return (
		<div className='my-5 d-flex flex-column align-items-center justify-content-center'>
			<div className='container my-5 sign_in_container'>
				<h2 className='text-center'>{title}</h2>

				<form className='mt-5 form' onSubmit={handleSubmit}>
					<div className='mb-3 input-group'>
						<span className='input-group-text' id='addon'>
							Type
						</span>
						<select className='form-select' ref={truckRef}>
							<option value='SPRINTER'>Sprinter</option>
							<option value='SMALL STRAIGHT'>Small Straight</option>
							<option value='LARGE STRAIGHT'>Large Straight</option>
						</select>
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

export default TruckForm
