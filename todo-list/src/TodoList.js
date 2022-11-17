import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => (
  <ul style={{ listStyleType: "none" }}>
    {props.todoList.map(function (todo) {
      return <TodoListItem key={todo.id} todo={todo} />;
    })}
  </ul>
);

export default TodoList;
