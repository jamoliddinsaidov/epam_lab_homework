import React from 'react'
import styled from 'styled-components'

// components
import Search from '../components/Search/Search'

// utils
import { colors } from '../components/GlobalStyles'

const Home = () => {
	return (
		<StyledHome>
			<Search placeholder='Search by movie name...' />
		</StyledHome>
	)
}

const StyledHome = styled.div`
	width: 100%;
`

export default Home
