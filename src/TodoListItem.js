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
        {/* <text>&nbsp;&nbsp;</text>  */}
        <span> </span>
        <button type="button" onClick={handleRemoveTodo}>Remove</button>
      </li>
      
    </>
  )
}

export default ToDoListItem;

