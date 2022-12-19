import React from "react";

const todoList = [
  {
    id: 1,
    title: "Practice React",
  },
  {
    id: 2,
    title: "Walk the dog",
  },
  {
    id: 3,
    title: "Tell dog she's a good girl!",
  },
];

function TodoList() {
  return (
    <ul>
      {todoList.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}

export default TodoList;
