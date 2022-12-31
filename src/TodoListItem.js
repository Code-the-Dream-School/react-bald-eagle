import React from 'react';

function ToDoListItem ({ item, onRemoveTodo }) {
  console.log(item)
  const handleRemoveTodo = () => {
    onRemoveTodo(item);
  };
  return (
    <>
      <li>{item.title}</li>
      <button type="button" onClick={handleRemoveTodo}>Remove</button>
    </>
  )
}

export default ToDoListItem;

