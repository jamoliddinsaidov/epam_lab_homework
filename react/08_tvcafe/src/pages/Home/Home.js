import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// components
// import Search from '../../components/Search/Search'
import HeaderTitle from '../../components/Titles/HeaderTitle'
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel'
import HomeMovieList from '../../components/MovieLists/HomeMovieList'
import Footer from '../../components/Footer/Footer'
import HomeMovieCategoryContainer from './HomeMovieCategoryContainer'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { LoadMovies } from '../../store/actions/movieAction'

const Home = () => {
	// states
	const [moviesState, setMoviesState] = useState([])
	const [limit, setLimit] = useState(16)
	const [isActive, setIsActive] = useState({
		popularBtn: true,
		animationBtn: false,
		helpBtn: false,
	})

	// fetching data
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(LoadMovies())
	}, [dispatch])

	// extracting data
	const { scheduledForToday, popularShows, animations, isLoading } =
		useSelector((state) => state.movies)

	useEffect(() => {
		setMoviesState(popularShows.slice(0, 8))
		window.scroll(0, 0)
	}, [popularShows])

	// handlers
	const loadMoreHandler = () => {
		setLimit((prev) => prev + 8)

		if (isActive.popularBtn) {
			setMoviesState(popularShows.slice(0, limit))
		}

		if (isActive.animationBtn) {
			setMoviesState(animations.slice(0, limit))
		}
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
						<HomeMovieCategoryContainer
							isActive={isActive}
							setIsActive={setIsActive}
							setMoviesState={setMoviesState}
						/>
						<HomeMovieList
							movies={moviesState}
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
