const base_url = 'https://api.tvmaze.com'

// custom URLs
export const moviesScheduledForTodayUrl = (date) =>
	`${base_url}/schedule/web/?date=${date}`

export const singleMovieSearchUrl = (searchTerm) =>
	`${base_url}/singlesearch/shows?q=${searchTerm}`

export const fuzzySearchUrl = (searchTerm) =>
	`${base_url}/search/shows?q=${searchTerm}`

export const searchByIdUrl = (id) => `${base_url}/shows/${id}`
