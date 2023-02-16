import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

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

// exercise 4.1
TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
}
  
export default TodoListItem;
