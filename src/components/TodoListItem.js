import React from "react";
import PropTypes from "prop-types";
import style from "../TodoListItem.module.css";
// Declare a function named TodoListItem
//
const TodoListItem = ({ todo, onRemoveTodo }) => (
  <li key={todo.id} className={style.ListItem}>
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
TodoListItem.prototypes = {
  todo: PropTypes.any,
  onRemoveTodo: PropTypes.func,
};

// Export TodoListItem function as default
export default TodoListItem;
