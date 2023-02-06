import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, onRemoveTodo, onDone }) => {
  return (
    <ul className="todo-list" style={{ listStyleType: "none" }}>
      {todoList.map(function (todo) {
        return (
          <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} handleDoneChange={onDone} />
        );
      })}
    </ul>
)};

export default TodoList;
