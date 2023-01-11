import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const removeTodo = () => {
    onRemoveTodo(todo.id)
  }
  return (
    <li>
      <b>{todo.fields.Name} </b>
      <button type="button" onClick={removeTodo}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
