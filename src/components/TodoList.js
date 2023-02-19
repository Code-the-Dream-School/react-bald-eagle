import * as React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} onRemoveTodo={onRemoveTodo} todo={todo} />
      ))}
    </ul>
  );
};
TodoList.prototypes = {
  todoList: PropTypes.func,
  onRemoveTodo: PropTypes.func,
};
export default TodoList;
