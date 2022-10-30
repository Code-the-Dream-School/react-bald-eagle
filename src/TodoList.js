import React from 'react';

const TodoList = () => {
  const todoList = [
    {
      id: 1,
      title: "Complete Assignment"
    },
    {
      id: 2,
      title: "Join Mentor Session"
    },
    {
      id: 3,
      title: "Submit Assignment"
    }
  ];

  return (
    <div>
      <ul>
        {todoList.map(function(item) {
          return (
            <li key={item.id}>{item.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
  
export default TodoList;
