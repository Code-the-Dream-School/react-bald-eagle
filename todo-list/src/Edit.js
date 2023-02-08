import React from "react";
import TodoList from "./TodoList";
import styles from "./Assets/css/App.module.css"

const Edit = ({user, todoList, removeTodo}) => {
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
    </div>
    )
}

export default Edit
