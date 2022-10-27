import React from 'react';

const todoList = [
  {
    id: 1,
    title: "React Assignments"
  },
  {
    id: 2,
    title: "Algorithm Practice"
  },
  {
    id: 3,
    title: "Review"
  }
];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>      
      <ul style={{listStyleType:'none'}}>
        {todoList.map(function(item) {
            return (
              <li key={item.id}>{item.title}</li>
            )            
        })}
      </ul>
    </div>
  );
}

export default App;
