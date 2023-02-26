import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, onRemoveTodo, onHandleToggleDone }) => {
  return (
    <>
      <li key={todo.id} className = {style.ListItem}>
        <span
          style={{ textDecoration: todo.fields.Completed || todo.Completed
            ? "line-through" : "none" }}
          onClick={() => onHandleToggleDone(todo.id)}
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
