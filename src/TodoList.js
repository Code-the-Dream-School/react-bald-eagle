import React from "react";

var todolist = [
  { id: "1", title: "work" },
  { id: "2", title: "eat" },
  { id: "3", title: "sleep" },
];

function TodoList() {
  return (
    <ul>
      {todolist.map(function (item) {
        return <li key={item.id.title}>{item.title}</li>;
      })}
    </ul>
  );
}

export default TodoList;
