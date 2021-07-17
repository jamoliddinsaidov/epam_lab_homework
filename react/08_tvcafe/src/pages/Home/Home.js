import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'

// components
import HeaderTitle from '../../components/Titles/HeaderTitle'
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel'
import HomeMovieList from '../../components/ListComponents/HomeMovieList'
import Footer from '../../components/Footer/Footer'
import HomeMovieCategoryContainer from './HomeMovieCategoryContainer'
import FilterContainer from '../../components/FilterContainer/FilterContainer'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { LoadMovies } from '../../store/actions/movieAction'

//utils
import { filterMovies } from '../../utils/filterMovies'

const Home = () => {
	// fetching data
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(LoadMovies())
	}, [dispatch])

	// extracting data
	const { scheduledForToday, popularShows, animations, allMovies, isLoading } =
		useSelector((state) => state.movies)

	const scheduledForTodayData = useMemo(
		() => scheduledForToday,
		[scheduledForToday]
	)
	const popularShowsData = useMemo(() => popularShows, [popularShows])
	const animationsData = useMemo(() => animations, [animations])

	useEffect(() => {
		setMoviesState(popularShowsData.slice(0, 8))
		window.scroll(0, 0)
	}, [popularShowsData])

	// states
	const [moviesState, setMoviesState] = useState([])
	const [limit, setLimit] = useState(16)
	const [isActive, setIsActive] = useState({
		popularBtn: true,
		animationBtn: false,
		helpBtn: false,
	})
	const [options, setOptions] = useState({ type: '', value: '' })

	// handlers
	const optionHandler = (type, value) => {
		setOptions((prev) => ({
			...prev,
			type,
			value,
		}))
	}

	// filtering the data according to user's selected options
	const filteredData = useMemo(
		() => filterMovies(allMovies, options),
		[options, allMovies]
	)

	const loadMoreHandler = () => {
		setLimit((prev) => prev + 8)

		if (isActive.popularBtn) {
			setMoviesState(popularShowsData.slice(0, limit))
		} else if (isActive.animationBtn) {
			setMoviesState(animationsData.slice(0, limit))
		} else if (isActive.helpBtn) {
			setMoviesState(filteredData.slice(0, limit))
		}
	}

	// setting movies data according to the clicked category buttons
	useEffect(() => {
		if (isActive.popularBtn) {
			setMoviesState(popularShowsData.slice(0, 8))
		} else if (isActive.animationBtn) {
			setMoviesState(animationsData.slice(0, 8))
		} else if (isActive.helpBtn) {
			setMoviesState(filteredData.slice(0, 8))
		}
	}, [
		isActive.popularBtn,
		isActive.animationBtn,
		isActive.helpBtn,
		popularShowsData,
		animationsData,
		filteredData,
	])

	return (
		<StyledHome>
			{!isLoading && (
				<>
					<div>
						<HeaderTitle title='Today on TV' className='h2' />
						<MovieCarousel movies={scheduledForTodayData} />
					</div>
					<div>
						<HomeMovieCategoryContainer
							isActive={isActive}
							setIsActive={setIsActive}
							setMoviesState={setMoviesState}
							filteredMovies={filteredData}
						/>
						{isActive.helpBtn && (
							<FilterContainer optionHandler={optionHandler} />
						)}
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
