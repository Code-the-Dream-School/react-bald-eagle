import App from './App'

const AddTodo = async (newTodo) => {
	const newTodoObject = {
		"id": JSON.stringify(newTodo.id),
		"createdTime": new Date().toJSON(),
		"fields": {
			"Name": `${newTodo.title}`
		}
	}
	const options = {
		method: 'post',
		headers: {
			Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
		},
		'Content-Type': 'application/json',
		data: {
			"records": [
				newTodoObject,
				...App.todoList.data
			]
		}
	}
	console.log('newTodo', newTodoObject, 'data', options.data)
	try {
		const response = await fetch(App.endpoint, options)
		// console.log('response', response)
		if (response.ok) {
			App.dispatchTodoList({ type: 'LIST_FETCH_SUCCESS' })
		}
		App.dispatchTodoList({ type: 'LIST_FETCH_FAILURE' })
	}
	catch {
		App.dispatchTodoList({ type: 'LIST_FETCH_FAILURE' })
	}
};

export default AddTodo
