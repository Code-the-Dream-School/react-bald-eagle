import React from "react";
import PropTypes from "prop-types";
import style from "../TodoListItem.module.css";
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
  todo: PropTypes.string,
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
