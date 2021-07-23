const base_url = 'https://api.tvmaze.com'

// custom URLs
export const moviesScheduledForTodayUrl = (date) =>
	`${base_url}/schedule/web/?date=${date}`

export const fuzzySearchUrl = (searchTerm) =>
	`${base_url}/search/shows?q=${searchTerm}`

export const searchByIdUrl = (id) => `${base_url}/shows/${id}`
export const pagedMoviesUrl = (page) => `${base_url}/shows?page=${page}`
