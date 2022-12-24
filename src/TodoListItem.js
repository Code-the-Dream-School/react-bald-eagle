import React from 'react';

function ToDoListItem ({item}) {
  console.log(item)
  return (
    <li>{item.title}</li>
  )
}

export default ToDoListItem;

