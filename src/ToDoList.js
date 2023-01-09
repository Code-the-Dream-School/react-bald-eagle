import React from 'react';
import TodoListItem from './TodoListItem';

function ToDoList({ todoList, onRemoveTodo }) {
  console.log("todoList", todoList)
  return (
    <ul style={{listStyleType:'none'}}>
      {todoList.map(function(item) {
        return (
          <TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo}/>);
      })}      
    </ul>
  )
}

export default ToDoList;