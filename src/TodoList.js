import React from "react";

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
            {todoList.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
      </ul>
    )
}

export default TodoList