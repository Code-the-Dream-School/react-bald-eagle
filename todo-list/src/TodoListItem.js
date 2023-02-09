import React from "react";
import styles from "./Assets/css/App.module.css"

const TodoListItem = ({ todo, onRemoveTodo, path }) => {
  const removeTodo = () => {
    onRemoveTodo(todo.id)
  }

  return (
    <li className={onRemoveTodo ? styles.itemEdit : styles.item }>
      <b>{todo.fields.Name} </b>
      {onRemoveTodo ?
        <button className={`btn ${styles.removeTodo} btn-dark`} type="button" onClick={removeTodo}>
          Remove
        </button> :
        <></>
      }
    </li>
  );
};

export default TodoListItem;
