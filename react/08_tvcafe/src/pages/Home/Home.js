import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// components
// import Search from '../../components/Search/Search'
import HeaderTitle from '../../components/Titles/HeaderTitle'
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel'
import HomeMovieList from '../../components/MovieLists/HomeMovieList'
import Footer from '../../components/Footer/Footer'
import HomeMovieCategoryContainer from './HomeMovieCategoryContainer'

// utils
// import { colors, Container } from '../../components/GlobalStyles'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { LoadMovies } from '../../store/actions/movieAction'

const Home = () => {
	// states
	const [popularShowsState, setPopularShowsState] = useState([])
	const [limit, setLimit] = useState(16)

	// fetching data
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(LoadMovies())
	}, [dispatch])

	// extracting data
	const { scheduledForToday, popularShows, isLoading } = useSelector(
		(state) => state.movies
	)

	useEffect(() => {
		setPopularShowsState(popularShows.slice(0, 8))
	}, [popularShows])

	// handlers
	const loadMoreHandler = () => {
		setLimit((prev) => prev + 8)
		setPopularShowsState(popularShows.slice(0, limit))
	}

	return (
		<StyledHome>
			{/* <Search placeholder='Search movies by name...' /> */}

			{!isLoading && (
				<>
					<div>
						<HeaderTitle title='Today on TV' className='h2' />
						<MovieCarousel movies={scheduledForToday} />
					</div>
					<div>
						<HomeMovieCategoryContainer />
						<HomeMovieList
							movies={popularShowsState}
							loadMoreHandler={loadMoreHandler}
						/>
					</div>
				</>
			)}

			<Footer />
		</StyledHome>
	)
}

const StyledHome = styled.div`
	width: 100%;
	position: relative;
`

export default Home
