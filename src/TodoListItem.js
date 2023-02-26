import React from 'react';

function ToDoListItem ({ item, onRemoveTodo }) {
  console.log(item)
  const handleRemoveTodo = () => {
    onRemoveTodo(item);
  };

  // let tableDate = item.fields["Due Date"];
  // let newTableDate = new Date (tableDate);

  return (    
    <>
      <li>
        {item.fields.title}
        <span></span>
        <span> dueDate: </span>
        {/* {newTableDate.toDateString()} */}
        <span> </span>
        <button type="button" onClick={handleRemoveTodo}>Remove</button>
      </li>
      
    </>
  )
}

export default ToDoListItem;

