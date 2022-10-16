import React from "react";

const todoList = [
  { id: 1, title: "Creat React First App" },
  { id: 2, title: "Create a Todo List" },
  { id: 3, title: "Complete Assignment" },
];

const TodoList = () => {
  return (
    <ul>
      {todoList.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;
