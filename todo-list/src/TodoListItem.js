import { useState } from "react";
import styles from "./Assets/css/App.module.css"
import InputWithLabel from "./InputWithLabel";

const TodoListItem = ({ todo, onRemoveTodo, handleDoneChange }) => {
  const [done, setDone] = useState(todo.fields.Done)

  const removeTodo = () => {
    onRemoveTodo(todo.id)
  }

  const handleChange = (event) => {
    handleDoneChange(event.target.checked, todo)
    setDone(event.target.checked)
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
        boxChecked={done}
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
