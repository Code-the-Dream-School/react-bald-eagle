import React from 'react';

function ToDoListItem ({ item, onRemoveTodo }) {
  console.log(item)
  const handleRemoveTodo = () => {
    onRemoveTodo(item);
  };
  return (
    <>
      <li>
        {item.title}
        <span> </span>
        <button type="button" onClick={handleRemoveTodo}>Remove</button>
      </li>
      
    </>
  )
}

export default ToDoListItem;

