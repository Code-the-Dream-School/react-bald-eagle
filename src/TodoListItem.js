import React from 'react';


const TodoListItem = (props) => {

  return (
    <li>
      {props.item.title}
    </li>
  )
}
  
export default TodoListItem;
