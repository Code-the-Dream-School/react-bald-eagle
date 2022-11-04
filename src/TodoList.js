import * as React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  {
    id: 1,
    title: "Complete assigment",
  },
  {
    id: 2,
    title: "Read more about React",
  },
  {
    id: 3,
    title: "Practice coding ",
  },
];

function TodoList() {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}

export default TodoList;
