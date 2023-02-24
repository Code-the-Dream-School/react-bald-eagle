import UserControl from './modals/UserControl';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import TodoList from "./lists/TodoList";
import { FloatingDiv } from "./modals/FloatingDiv";
import styles from "../Assets/css/App.module.css";

const Edit = ({ user, todoList, removeTodo, show, handleClose, handleShow, handleSearch }) => {
	let navigate = useNavigate();
	let homePath = '/';
	let path = '/view';

	const routeChange = (type) => {
		if (type === 'home') {
			navigate(homePath)
		} else {
			navigate(path);
		}
	}

	return (
		<div className={styles.currentList}>
			<UserControl
				handler={handleShow}
				searchHandler={handleSearch}
				onClick={() => routeChange('home')}
			>View Your List</UserControl>

			<FloatingDiv
				currentUser={user}
				routeChange={() => routeChange('view')}
				path={path}
				buttonText={"View List"}
				show={show}
				handleClose={handleClose}
			>Edit {user}'s list</FloatingDiv>


			<div className={styles.listDiv}>
				<h1 className={styles.mainTitle}>{user}'s Todo List</h1>
				<div className={styles.todoItems}>
					{todoList.isError && <p>Something went wrong...</p>}

					{todoList.isLoading ? <p style={{ color: 'white' }}>Loading...</p>
						: todoList.data.length > 0 ?
							<TodoList todoList={todoList.data} onRemoveTodo={removeTodo} path={path} /> :
							<p style={{ color: 'white' }}>No Data</p>
					}
				</div>
			</div>
		</div>
	)
}

Edit.propTypes = {
	user: PropTypes.string.isRequired,
	todoList: PropTypes.object.isRequired,
	removeTodo: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	handleClose: PropTypes.func,
	handleShow: PropTypes.func.isRequired,
	handleSearch: PropTypes.func.isRequired
}

export default Edit
