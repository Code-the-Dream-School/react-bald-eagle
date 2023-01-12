import React from 'react';

function ToDoListItem ({ item, onRemoveTodo }) {
  console.log(item)
  const handleRemoveTodo = () => {
    onRemoveTodo(item);
  };
  return (
    <>
      <li>
        {item.fields.Title}
        <span> </span>
        <button type="button" onClick={handleRemoveTodo}>Remove</button>
      </li>
      
    </>
  )
}

export default ToDoListItem;

