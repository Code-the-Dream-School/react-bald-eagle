import React from 'react';
import style from './TodoListItem.module.css';


const TodoListItem = ({ todo, onRemoveTodo }) => {
  // const { title, id } = todo;
  return (
    <>
      <li className = {style.ListItem}> 
        {todo.fields.Title} 
        <button className = {style.ButtonClass} onClick={()=>onRemoveTodo(todo)}>Remove</button>
      </li>
    </>
  );
}
  
export default TodoListItem;
