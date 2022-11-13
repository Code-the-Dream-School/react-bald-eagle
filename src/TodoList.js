import React from "react";
import TodoListItem from "./TodoListItem";

var todolist = [
  { id: "1", title: "work" },
  { id: "2", title: "eat" },
  { id: "3", title: "sleep" },
];

function TodoList() {
  return (
    <ul>
      {todolist.map(function (item) {
        return <TodoListItem key={item.id} title={item.title} />;
      })}
    </ul>
  );
}

export default TodoList;
