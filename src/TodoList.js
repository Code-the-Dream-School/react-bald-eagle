import * as React from "react";
import TodoListItem from "./TodoListItem";


const TodoList = () => {
  const todos = [
    { id: 1, title: "Creat React First App" },
    { id: 2, title: "Create a Todo List" },
    { id: 3, title: "Complete Assignment" },
  ];
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList;
