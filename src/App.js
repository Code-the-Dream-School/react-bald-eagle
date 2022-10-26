import React from 'react';

var todoList = [
  {
    id: 1,
    title: "Complete Assignment",
  },
  {
    id: 2,
    title: "Check Email Inbox",
  },
  {
    id: 3,
    title: "Complete Lessons",
  },
];

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
