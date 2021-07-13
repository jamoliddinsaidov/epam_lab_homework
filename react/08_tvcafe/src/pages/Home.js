import React from 'react'
import styled from 'styled-components'

// components
import Search from '../components/Search/Search'
import MovieCarousel from '../components/MovieCarousel/MovieCarousel'

// utils
import { colors } from '../components/GlobalStyles'

const Home = () => {
	return (
		<StyledHome>
			{/* <Search placeholder='Search movies by name...' /> */}
			<MovieCarousel />
		</StyledHome>
	)
}

const StyledHome = styled.div`
	width: 100%;
`

export default Home
