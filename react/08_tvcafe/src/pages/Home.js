import React from 'react'
import styled from 'styled-components'

// components
import Search from '../components/Search/Search'
import MovieList from '../components/MovieContainer/MovieList'

// utils
import { colors } from '../components/GlobalStyles'

const Home = () => {
	return (
		<StyledHome>
			{/* <Search placeholder='Search movies by name...' /> */}
			<MovieList />
		</StyledHome>
	)
}

const StyledHome = styled.div`
	width: 100%;
`

export default Home
