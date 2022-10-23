import * as React from "react";

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
      {todoList.map(function (item) {
        return <li key={item.id}> {item.title} </li>;
      })}
    </ul>
  );
}

export default TodoList;
