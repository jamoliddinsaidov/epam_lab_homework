import React from 'react'
import styled from 'styled-components'

const ImageContainer = ({ source, name }) => {
	return <img src={source} alt={name} className='img-shadow' />
}

export const StyledImageContainer = styled.div`
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform: scale(1);
		transition: transform 1000ms ease-in-out;

		&:hover {
			transform: scale(1.1);
		}
	}
`

export default ImageContainer
