export const setMovies = (
	isActive,
	popularShows,
	animations,
	filteredData,
	setMoviesState,
	limit
) => {
	if (isActive.popularBtn) {
		setMoviesState(popularShows.slice(0, limit))
		console.log('hi')
	} else if (isActive.animationBtn) {
		setMoviesState(animations.slice(0, limit))
	} else if (isActive.helpBtn) {
		setMoviesState(filteredData.slice(0, limit))
	}
}
