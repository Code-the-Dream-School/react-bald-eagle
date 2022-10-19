import React from 'react';

const todoList = [
  {
    'id':1,
    'title':'waitting assignment'
}, {
  'id':2,
  'title':'ongoing assignment'
}, {
  'id':3,
  'title':'Complete assignment'
},
];

const days = ['sunday','monday']

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function(item){
        
          return <li key={item.id}>{item.title}</li>
        
        })}
        
      </ul>
      </>

  );
}

export default App;
