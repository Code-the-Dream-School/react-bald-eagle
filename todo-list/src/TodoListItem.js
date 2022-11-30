import React from "react";

const TodoListItem = ({ todo }) => {
  return (
    <li>
      <b>{todo.title}</b>
    </li>
  );
};

export default TodoListItem;
