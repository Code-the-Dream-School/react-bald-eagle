import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import TodoList from "./TodoList";
import NavButton from "./NavButton";
import styles from "../Assets/css/App.module.css";

const Edit = ({ user, todoList, removeTodo }) => {
	let navigate = useNavigate();
	let path = '/';

	const routeChange = () => {
		navigate(path);
	}
	return (
		<div className={styles.currentList}>
			<div className={styles.floatingDiv}>
				<div className={styles.title}>
					{
						user.length > 0 ? <h1>Edit {user}'s Todo List</h1> : <h1>Todo List</h1>
					}
				</div>

				<NavButton
					type="button"
					action={routeChange}
					path={path}
				>HOME</NavButton>
			</div>

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
