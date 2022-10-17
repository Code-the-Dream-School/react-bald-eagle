import React from 'react';

function App() {
  const todoList = [
    {
      title: "Paint the kitchen",
      id: 1
    },
    {
      title: "Feed the cats",
      id: 2
    },
    {
      title: "Take the kids to the park",
      id: 3
    }
  ]

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Todo List
      </h1>

      <label htmlFor="search">search</label>
      <input id="search" type="text"></input>

      <hr/>

      <ul list-style-type="none">
        { todoList.map(function (task) {
          return <li key={task.id}><b>{task.title}</b></li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
