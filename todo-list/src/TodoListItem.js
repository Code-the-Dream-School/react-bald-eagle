import React from "react";
import styles from "./Assets/css/App.module.css"

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const removeTodo = () => {
    onRemoveTodo(todo.id)
  }
  return (
    <li className={styles.item}>
      <b>{todo.fields.Name} </b>
      <button className={`btn ${styles.removeTodo} btn-dark`} type="button" onClick={removeTodo}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
