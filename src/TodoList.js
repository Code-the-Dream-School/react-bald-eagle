import * as React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
