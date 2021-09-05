export const formatDate = (date) => {
	date = new Date(date)
	const options = { hour: '2-digit', minute: '2-digit', year: 'numeric', month: 'short', day: 'numeric' }
	return date.toLocaleDateString('en-US', options)
}
