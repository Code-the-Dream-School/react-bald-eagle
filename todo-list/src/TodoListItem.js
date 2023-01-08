import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li>
      <b>{todo.fields.Name} </b>
      <button type="button" onClick={onRemoveTodo.bind(null, todo)}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
