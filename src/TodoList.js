import * as React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} onRemoveTodo={onRemoveTodo} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
