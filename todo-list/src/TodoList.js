import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, onRemoveTodo }) => (
  <ul style={{ listStyleType: "none" }}>
    {todoList.map(function (todo) {
      return <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />;
    })}
  </ul>
);

export default TodoList;
