import React from 'react'
import styled from 'styled-components'

const HeaderTitle = ({ title }) => {
	return <StyledHeader>{title}</StyledHeader>
}

const StyledHeader = styled.h4`
	margin: 0.8em 0;
	font-weight: 300;
	text-align: center;
`

export default HeaderTitle
