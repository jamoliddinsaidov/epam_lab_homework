import React, { useEffect } from 'react'
import styled from 'styled-components'

// components
import Search from '../../components/Search/Search'
import HeaderTitle from '../../components/Titles/HeaderTitle'
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel'
import HomeMovieList from '../../components/MovieLists/HomeMovieList'
import Footer from '../../components/Footer/Footer'

// utils
import { colors, Container } from '../../components/GlobalStyles'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { LoadMoviesForToday } from '../../store/actions/movieAction'

const Home = () => {
	// fetching data
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(LoadMoviesForToday())
	}, [dispatch])

	const { scheduledForToday, popularShows, isLoading } = useSelector(
		(state) => state.movies
	)

	return (
		<StyledHome>
			{/* <Search placeholder='Search movies by name...' /> */}

			{!isLoading && (
				<div>
					<HeaderTitle title='Today on TV' className='h2' />
					<MovieCarousel movies={scheduledForToday} />
				</div>
			)}

			<StyledHomeMovieCategoryContainer>
				<div>
					<HeaderTitle title='we offer' />
				</div>

				<div className='line'></div>

				<StyledHomeOptions>
					<button>Popular Shows</button>
					<button>Animations</button>
					<button>Help Finding Favorites</button>
				</StyledHomeOptions>
			</StyledHomeMovieCategoryContainer>

			{!isLoading && <HomeMovieList movies={popularShows} />}

			<Footer />
		</StyledHome>
	)
}

const StyledHome = styled.div`
	width: 100%;
`

const StyledHomeMovieCategoryContainer = styled.div`
	background: ${colors.bgNavColor};
	padding: 1.5em 0;
`
const StyledHomeOptions = styled(Container)`
	padding: 1.5em 0 0.5em;

	button {
		margin-right: 1em;
		text-transform: uppercase;
		font-weight: 300;
		font-size: 1.2rem;
		cursor: pointer;
		border-radius: 0;
		border: none;
		background: transparent;
		outline: none;
		font-family: 'Source Sans Pro', sans-serif;
		border-bottom: 1px solid transparent;
		transition: 300ms ease-in-out;
		transition-property: color, padding, border-color;

		&:hover,
		&:focus,
		&.active {
			color: ${colors.primaryColorTwo};
		}

		&.active {
			border-color: ${colors.primaryColorTwo};
			padding: 0 0.5em;
		}
	}
`
export default Home
