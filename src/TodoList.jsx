import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
    return (
      <ul>
        {props.todoList.map(function (todo) {
          return <TodoListItem key={todo.id} todo={todo}/>;
        })}
      </ul>
    );
}

export default TodoList