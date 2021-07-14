export const truncateSummary = (summary) => {
	let shortened = summary.split(' ').splice(0, 30)
	shortened = shortened.join(' ').replace(/(<([^>]+)>)/gi, '')

	return shortened
}
