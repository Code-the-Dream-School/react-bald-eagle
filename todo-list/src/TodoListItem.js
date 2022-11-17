import React from "react";

const TodoListItem = (props) => {
  return (
    <li>
      <b>{props.todo.title}</b>
    </li>
  );
};

export default TodoListItem;
