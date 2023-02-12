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
    <li className={onRemoveTodo || handleChange ? styles.itemEdit : styles.item}>
      <b>{todo.fields.Name} </b>
      {onRemoveTodo ?
        <button className={`btn ${styles.removeTodo} btn-dark`} type="button" onClick={removeTodo}>
          Remove
        </button> :
        <>
          <InputWithLabel
            todoTitle={todo.fields.Name}
            handleChange={handleChange}
            title="Done?"
            type="Checkbox"
            id="todoDone?"
            boxChecked={done}
          ></InputWithLabel>
        </>
      }
    </li>
  );
};

export default TodoListItem;
