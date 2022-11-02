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
  },
  {
    id: 4,
    title: "Build"
  },


];

function ToDoList () {
  return (
    <ul style={{listStyleType:'none'}}>
      {todoList.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>
  )
}


export default ToDoList;
