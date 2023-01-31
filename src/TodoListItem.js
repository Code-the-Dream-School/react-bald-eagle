import React from "react";
import style from './TodoListItem.module.css'
// Declare a function named TodoListItem
//
const TodoListItem = ({ todo, onRemoveTodo }) => (
  <li className={style.ListItem}>
    {todo.fields.Title}
    <button
      type="button"
      onClick={() => {
        onRemoveTodo(todo.id);
      }}
    >
      Remove
    </button>
  </li>
);

// Export TodoListItem function as default
export default TodoListItem;
