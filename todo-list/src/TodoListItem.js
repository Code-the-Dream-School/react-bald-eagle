import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const removeTodo = () => {
    onRemoveTodo(todo.id)
  }
  return (
    <li className="todo-item">
      <b>{todo.fields.Name} </b>
      <button className="remove-todo" type="button" onClick={removeTodo}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
