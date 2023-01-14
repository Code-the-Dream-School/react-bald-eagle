import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const CurrentList = ({ todoList, addTodo, removeTodo }) => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Todo List</h1>

			<AddTodoForm onAddTodo={addTodo} />

			{todoList.isError && <p>Something went wrong...</p>}

			{todoList.isLoading ? <p>Loading...</p>
				: todoList.data.length > 0 ?
					<TodoList todoList={todoList.data} onRemoveTodo={removeTodo} /> :
					<p>No Data</p>
			}
		</div>
	)
}

export default CurrentList
