export const truncateSummary = (summary) => {
	let shortened = summary.split(' ').splice(0, 30)
	shortened = shortened.join(' ').replace(/(<([^>]+)>)/gi, '')

	return shortened + '...'
}

export const formatSummary = (summary) =>
	summary
		? summary.replace(/(<([^>]+)>)/gi, '')
		: 'Movie description is not available...'

export const formatWithComma = (arr) => arr.join(', ')
