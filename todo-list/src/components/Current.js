import UserControl from "./modals/UserControl";
import TodoList from "./lists/TodoList";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FloatingDiv } from "./modals/FloatingDiv";
import styles from "../Assets/css/App.module.css";

const CurrentList = ({ todoList, addTodo, currentUser, onDone, show, handleShow, handleClose }) => {
	let navigate = useNavigate();
	let path = '/edit';

	const routeChange = () => {
		navigate(path);
	}

	return (
		<div className={styles.currentList}>
		<UserControl
			handler={handleShow}
		>Add Task</UserControl>

			<FloatingDiv
				currentUser={currentUser}
				addTodo={addTodo}
				routeChange={routeChange}
				path={path}
				buttonText={"Trim List"}
				show={show}
				handleClose={handleClose}
			>Add tasks to {currentUser}'s list</FloatingDiv>

			<div className={styles.listDiv}>
				<h1 className={styles.mainTitle}>{currentUser}'s Todo List</h1>
				<div className={styles.todoItems}>
					{todoList.isError && <p style={{ color: 'white' }}>Something went wrong...</p>}

					{todoList.isLoading ? <p style={{ color: 'white' }}>Loading...</p>
						: todoList.data.length > 0 ?
							<TodoList todoList={todoList.data} onDone={onDone} path={path} /> :
							<p style={{ color: 'white' }}>No Data</p>
					}
				</div>
			</div>
		</div>
	)
}

CurrentList.propTypes = {
	todoList: PropTypes.object.isRequired,
	addTodo: PropTypes.func,
	currentUser: PropTypes.string.isRequired,
	onDone: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	handleShow: PropTypes.func,
	handleClose: PropTypes.func
}

export default CurrentList
