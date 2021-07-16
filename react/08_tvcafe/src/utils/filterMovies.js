export const filterMovies = (movies, options) => {
	let filteredMovies = []

	switch (options.type) {
		case 'country':
			filteredMovies = movies.filter(
				(movie) => movie.network?.country?.name === options.value
			)
			break

		case 'rating':
			let rating = parseInt(options.value)
			filteredMovies = movies.filter(
				(movie) =>
					movie.rating.average >= rating && movie.rating.average <= rating + 1
			)
			break

		case 'language':
		case 'status':
		case 'genres':
			filteredMovies = movies.filter((movie) =>
				movie[options.type].includes(options.value)
			)
			break

		default:
			filteredMovies = []
			break
	}

	return filteredMovies
}
