import React from "react";
import TodoListItem from "./TodoListItem";

var todoList = [
    {
      id: 1,
      title: "Complete assignment",
    },
    {
      id: 2,
      title: "Check email inbox",
    },
    {
      id: 3,
      title: "Complete lessons",
    },
  ];

function TodoList() {
    return (
        <ul>
            {todoList.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
      </ul>
    )
}

export default TodoList