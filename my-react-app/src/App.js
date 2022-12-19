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

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
