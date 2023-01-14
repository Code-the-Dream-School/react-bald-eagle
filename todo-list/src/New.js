import AddTodoForm from "./AddTodoForm"

const NewList = ({ addTodo }) => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>New Todo List</h1>

			<AddTodoForm onAddTodo={addTodo} />
		</div>
	)
}

export default NewList
