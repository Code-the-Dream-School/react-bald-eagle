import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, onRemoveTodo, onhandleToggleDone }) => {
  return (
    <>
      <li key={todo.id} className = {style.ListItem}>
        <span
          style={{ textDecoration: todo.done ? "line-through" : "none" }}
          onClick={() => onhandleToggleDone(todo.id)}
        > 
        {todo.fields.Title}
        </span> 
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
