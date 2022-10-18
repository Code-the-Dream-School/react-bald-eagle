import React from 'react';

function App() {
const todoList = [
  { id: 1, title: "study" },
  { id: 2, title: "code" },
  { id: 3, title: "complete assigment" },
];
  return (
    <div className="App">
   <h1> Todo List</h1>
   <ul> 
       {todoList.map((todo, index) => {
        return <li key={index}>{todo.title}</li>
       })}

   </ul>
   </div>
  );
}

export default App;