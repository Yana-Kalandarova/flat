export const getFormattedDate = (dateStr) => {
	const date = new Date(dateStr);

	return date.toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	});
};