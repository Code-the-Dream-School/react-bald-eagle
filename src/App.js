import React from "react";

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

function App() {
  return (
    <div>
      <h1> Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          return <li key={item.id}> {item.title} </li>;
        })}
      </ul>
    </div>
  );
}

export default App;
