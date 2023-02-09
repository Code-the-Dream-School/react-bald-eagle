import TodoList from "./TodoList";
import { useNavigate } from "react-router-dom";
import AddTodoForm from "./AddTodoForm";
import TodoButton from "./TodoButton";
import styles from "./Assets/css/App.module.css"

const CurrentList = ({ todoList, addTodo, currentUser }) => {
	let navigate = useNavigate();
	let path = '/edit';  
  
	const routeChange = () =>{
	  navigate(path);
	}
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
			<TodoButton
			  type="button"
			  action={routeChange}
			  path={path}
			>EDIT</TodoButton>
		</div>
	)
}

export default CurrentList
