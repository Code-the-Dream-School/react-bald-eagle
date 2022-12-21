import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((item) => {
        return (
          <TodoListItem key={item.id} {...item} onRemoveTodo={onRemoveTodo} />
        );
      })}
    </ul>
  );
}

export default TodoList;
