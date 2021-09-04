export const formatDate = (date) => {
	date = new Date(date)
	const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
	return date.toLocaleDateString('en-US', options)
}
