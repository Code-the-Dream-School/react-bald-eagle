import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const CurrentList = ({ todoList, addTodo, removeTodo, currentUser }) => {
	return (
		<div className="current-list" style={{ textAlign: "center" }}>
			<div className="title">
				{
					currentUser.length > 0 ? <h1>{currentUser}'s Todo List</h1> : <h1>Todo List</h1>
				}
			</div>

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
