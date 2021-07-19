import React from 'react'
import styled from 'styled-components'

// components
import DashboardMovie from '../DashboardContent/SingleContainers/DashboardMovie'
import DashboardTitle from '../Titles/DashboardTitle'

// utils
import { colors } from '../GlobalStyles'
import { v4 as uuidv4 } from 'uuid'

const DashboardMovieList = ({ movies, title }) => {
	const isSearched = title.includes('Searched')

	return (
		<StyledDashboardMovieList
			className={isSearched ? 'searchedMoviesContainer' : ''}>
			{!isSearched && <div className='line'></div>}
			<DashboardTitle title={title} />
			{movies.map((movie) => (
				<DashboardMovie
					className={isSearched ? 'searchedMovie' : ''}
					key={uuidv4()}
					movie={isSearched ? movie.show : movie}
					isSearched={isSearched}
				/>
			))}
		</StyledDashboardMovieList>
	)
}

export const StyledDashboardMovieList = styled.div`
	width: 45%;
	background: ${colors.bgNavColor};
`

export default DashboardMovieList
