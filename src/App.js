import React from 'react';

const todoList = [
  {
    id: 1,
    title: "Begin assignment"
  },
  {
    id: 2,
    title: "Tested assignment"
  },
  {
    id: 3,
    title: "Complete assignment"
  }
];

function App() {
  return (
    <div>
      <h1>ToDo List</h1>

      <ul>
        {todoList.map(function(item) {
          return (
            <li key={item.id}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
