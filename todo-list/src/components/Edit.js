import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import TodoList from "./TodoList";
import { FloatingDiv } from "./modals/FloatingDiv";
import NavButton from "./NavButton";
import styles from "../Assets/css/App.module.css";

const Edit = ({ user, todoList, removeTodo }) => {
	let navigate = useNavigate();
	let path = '/';

	const routeChange = () => {
		navigate(path);
	}
	console.log('user', user)
	return (
		<div className={styles.currentList}>
			<FloatingDiv
				currentUser={user}
				routeChange={routeChange}
				path={path}
				buttonText={"HOME"}
			>Edit {user}'s Todo List</FloatingDiv>

			<div className={styles.todoItems}>
				{todoList.isError && <p>Something went wrong...</p>}

				{todoList.isLoading ? <p style={{ color: 'white' }}>Loading...</p>
					: todoList.data.length > 0 ?
						<TodoList todoList={todoList.data} onRemoveTodo={removeTodo} path={path} /> :
						<p style={{ color: 'white' }}>No Data</p>
				}
			</div>
		</div>
	)
}

Edit.propTypes = {
	user: PropTypes.string.isRequired,
	todoList: PropTypes.object.isRequired,
	removeTodo: PropTypes.func.isRequired
}

export default Edit
