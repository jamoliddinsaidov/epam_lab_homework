import React from 'react'
import styled from 'styled-components'

// utils
import { Container } from '../GlobalStyles'

const HeaderTitle = ({ title }) => {
	return (
		<StyledHeader>
			<h2>{title}</h2>
		</StyledHeader>
	)
}

const StyledHeader = styled(Container)`
	margin: 1em auto;

	h2 {
		font-weight: 800;
		letter-spacing: 3px;
		text-align: center;
		text-transform: uppercase;
	}
`

export default HeaderTitle
