import React from "react";
import styles from "./Assets/css/App.module.css"
import InputWithLabel from "./InputWithLabel";

const TodoListItem = ({ todo, onRemoveTodo, handleDoneChange }) => {
  const removeTodo = () => {
    onRemoveTodo(todo.id)
  }

  const handleChange = (event) => {
    handleDoneChange(event.target.checked, todo)
  }

  return (
    <li className={styles.item}>
      <b>{todo.fields.Name} </b>
      <InputWithLabel
        todoTitle={todo.title}
        handleChange={handleChange}
        title="Done?"
        type="Checkbox"
        id="todoDone?"
        boxChecked={todo.fields.Done}
      ></InputWithLabel>
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
