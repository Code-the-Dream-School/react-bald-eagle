import React from 'react';
import TodoListItem from './TodoListItem';

function ToDoList({ todoList }) {
  return (
    <ul style={{listStyleType:'none'}}>
      {todoList.map(function(item) {
        return (
          <TodoListItem key={item.id} item={item} />);
      })}      
    </ul>
  )
}

export default ToDoList;
