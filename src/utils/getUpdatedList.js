const getUpdatedList = (item, list) => {
	try {
		const filteredList = list.filter(el => {
			return el.id !== item.id
		})
		filteredList.unshift(item)
		return filteredList
	} catch (error) {
		throw error
	}
}

export default getUpdatedList
