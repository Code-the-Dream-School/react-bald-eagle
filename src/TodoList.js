import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todoList = [
    {id: 1, title: "Complete Assignment"},
    {id: 2, title: "Join Mentor Session"},
    {id: 3, title: "Submit Assignment"}
  ];

  return (
    <div>
      <ul>
        {todoList.map((item) => (
          <TodoListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}
  
export default TodoList;
