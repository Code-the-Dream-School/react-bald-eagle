import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li>
      <b>{todo.title}</b>
      <button type="button" onClick={onRemoveTodo.bind(null, todo)}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
