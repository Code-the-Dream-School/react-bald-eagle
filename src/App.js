import * as React from 'react';

const todoList = [
  {
    id: '1',
    title: 'Complete assignment'
  },
  {
    id: '2',
    title: 'Finish reading Road to React'
  },
  {
    id: '3',
    title: 'Listen to Podcast episode.'
  }

]

function App(){
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
      {todoList.map(function(item){
          return <li key={item.id.title}>{item.title}</li>;
      })}
      </ul>
    </div>
 
  )
}

