import React from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "./TodoList";
import TodoButton from "./TodoButton";
import styles from "./Assets/css/App.module.css"

const Edit = ({user, todoList, removeTodo}) => {
    let navigate = useNavigate(); 
  
    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }
    return (
    <div className={styles.currentList}>
        <div className={styles.title}>
            {
                user.length > 0 ? <h1>Edit {user}'s Todo List</h1> : <h1>Todo List</h1>
            }
        </div>

        {todoList.isError && <p>Something went wrong...</p>}

        {todoList.isLoading ? <p style={{color: 'white'}}>Loading...</p>
            : todoList.data.length > 0 ?
                <TodoList todoList={todoList.data} onRemoveTodo={removeTodo} /> :
                <p style={{color: 'white'}}>No Data</p>
        }
        <TodoButton
          type="button"
          onClick={routeChange}
        >HOME</TodoButton>
    </div>
    )
}

export default Edit
