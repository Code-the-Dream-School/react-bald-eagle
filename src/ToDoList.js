import React from 'react';
import TodoListItem from './TodoListItem';

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
      {todoList.map(function(item) {
        return (
          <TodoListItem key={item.id} item={item} />);
      })}      
    </ul>
  )
}

export default ToDoList;
