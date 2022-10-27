import React from "react";

var todolist = [
  { id: "1", title: "work" },
  { id: "2", title: "eat" },
  { id: "3", title: "sleep" },
];

function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {todolist.map(function (item) {
          return <li key={item.id.title}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
