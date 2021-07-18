import React from 'react'
import styled from 'styled-components'

// utils
import { colors } from '../GlobalStyles'

const ImageContainer = ({ source, name }) => {
	return <img src={source} alt={name} />
}

export const StyledImageContainer = styled.div`
	overflow: hidden;
	box-shadow: 0px 0px 10px 3px ${colors.bgNavColor};

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
