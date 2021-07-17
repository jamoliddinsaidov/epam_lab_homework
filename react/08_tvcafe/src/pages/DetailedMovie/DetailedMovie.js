import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import styled from 'styled-components'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { LoadMovieById } from '../../store/actions/detailedMovieAction'

// components
import HeaderTitle from '../../components/Titles/HeaderTitle'
import DetailedMovieContent from '../../components/MovieCards/DetailedMovieContent'

// utils
import { Container } from '../../components/GlobalStyles'

const DetailedMovie = () => {
	const { id } = useParams()
	const location = useLocation()

	// fetching data
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(LoadMovieById(id))
	}, [dispatch, id, location])

	const { details, isLoading } = useSelector((state) => state.detailedMovie)

	return (
		<div>
			{!isLoading && (
				<StyledDetailedMovieContainer>
					<HeaderTitle title={details.name} />
					{details.image?.original && (
						<DetailedMovieContent details={details} />
					)}
				</StyledDetailedMovieContainer>
			)}
		</div>
	)
}

const StyledDetailedMovieContainer = styled(Container)`
	width: 80%;
	margin: 2em auto;
`

export default DetailedMovie
