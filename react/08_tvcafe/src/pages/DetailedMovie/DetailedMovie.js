import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import styled from 'styled-components'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { LoadMovieById } from '../../store/actions/detailedMovieAction'

// components
import HeaderTitle from '../../components/Titles/HeaderTitle'
import DetailedMovieContainer from '../../components/DetailedMovie/DetailedMovieContainer'
import LoadSpinner from '../../components/LoadSpinner'

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
			{!isLoading ? (
				<StyledDetailedMovieContainer>
					<HeaderTitle title={details.name} />
					{details.image?.original && (
						<DetailedMovieContainer details={details} />
					)}
				</StyledDetailedMovieContainer>
			) : (
				<LoadSpinner />
			)}
		</div>
	)
}

const StyledDetailedMovieContainer = styled(Container)`
	width: 90%;
	margin: 2em auto;
`

export default DetailedMovie
