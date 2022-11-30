import React from "react";

const TodoListItem = ({ todo }) => {
  return (
    <li>
      <b>{todo.title}</b>
      <button type="button">Remove</button>
    </li>
  );
};

export default TodoListItem;
