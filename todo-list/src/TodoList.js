import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => (
  <ul style={{ listStyleType: "none" }}>
    {todoList.map(function (todo) {
      return <TodoListItem key={todo.id} todo={todo} />;
    })}
  </ul>
);

export default TodoList;
