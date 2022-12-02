import React from "react";
// Declare a function named TodoListItem
//
const TodoListItem = ({ todo, onRemoveTodo}) => (
  <li >
    {todo.title}
    <button type="button" onClick={()=>{onRemoveTodo(todo.id)}}>Remove</button>
  </li>
);

// Export TodoListItem function as default
export default TodoListItem;
