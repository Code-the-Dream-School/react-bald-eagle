import TodoList from "./TodoList";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AddTodoForm from "./AddTodoForm";
import NavButton from "./NavButton";
import styles from "../Assets/css/App.module.css"

const CurrentList = ({ todoList, addTodo, currentUser, onDone }) => {
	let navigate = useNavigate();
	let path = '/edit';

	const routeChange = () => {
		navigate(path);
	}
	return (
		<div className={styles.currentList}>
			<div className={styles.floatingDiv}>
				<div className={styles.title}>
					{
						currentUser.length > 0 ? <h1>{currentUser}'s Todo List</h1> : <h1>Todo List</h1>
					}
				</div>

				<AddTodoForm onAddTodo={addTodo} />
			</div>

			<div className={styles.todoItems}>
				{todoList.isError && <p style={{ color: 'white' }}>Something went wrong...</p>}

				{todoList.isLoading ? <p style={{ color: 'white' }}>Loading...</p>
					: todoList.data.length > 0 ?
						<TodoList todoList={todoList.data} onDone={onDone} path={path} /> :
						<p style={{ color: 'white' }}>No Data</p>
				}
				<NavButton
					type="button"
					action={routeChange}
					path={path}
				>EDIT</NavButton>
			</div>
		</div>
	)
}

CurrentList.propTypes = {
	todoList: PropTypes.object.isRequired,
	addTodo: PropTypes.func,
	currentUser: PropTypes.string,
	onDone: PropTypes.func.isRequired
}

export default CurrentList
