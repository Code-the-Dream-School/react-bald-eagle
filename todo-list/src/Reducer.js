const ListReducer = (state, action) => {
	switch (action.type) {
		case 'LIST_FETCH_INIT':
			const savedList = JSON.parse(localStorage.getItem('list'))
			if (savedList) {
				return {
					...state,
					isLoading: false,
					isError: false,
					data: savedList,
				};
			} else
				return {
					...state,
					isLoading: true,
					isError: false,
				}
		case 'LIST_FETCH_SUCCESS':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		case 'LIST_FETCH_FAILURE':
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case 'REMOVE_LIST':
			return {
				...state,
				data: state.data.filter(
					(entry) => action.payload.id !== entry.id),
			};
		default:
			throw new Error();
	}
}

export default ListReducer
