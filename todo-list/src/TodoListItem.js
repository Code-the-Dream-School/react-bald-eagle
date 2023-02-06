import React from "react";
import InputWithLabel from "./InputWithLabel";

const TodoListItem = ({ todo, onRemoveTodo, handleDoneChange }) => {
  const removeTodo = () => {
    onRemoveTodo(todo.id)
  }

  const handleChange = (event) => {
    handleDoneChange(event.target.checked, todo)
  }

  return (
    <li className="todo-item">
      <b>{todo.fields.Name} </b>
      <InputWithLabel
        todoTitle={todo.title}
        handleChange={handleChange}
        title="Done?"
        type="Checkbox"
        id="todoDone?"
      ></InputWithLabel>
      <button className="remove-todo btn btn-dark" type="button" onClick={removeTodo}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
