import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import styles from "./Assets/css/App.module.css"

const CurrentList = ({ todoList, addTodo, currentUser }) => {
	return (
		<div className={styles.currentList}>
			<div className={styles.title}>
				{
					currentUser.length > 0 ? <h1>{currentUser}'s Todo List</h1> : <h1>Todo List</h1>
				}
			</div>

			<AddTodoForm onAddTodo={addTodo} />

			{todoList.isError && <p>Something went wrong...</p>}

			{todoList.isLoading ? <p style={{color: 'white'}}>Loading...</p>
				: todoList.data.length > 0 ?
					<TodoList todoList={todoList.data} /> :
					<p style={{color: 'white'}}>No Data</p>
			}
		</div>
	)
}

export default CurrentList
