import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";
import styles from "../Assets/css/App.module.css"

const TodoList = ({ todoList, onRemoveTodo, onDone, path }) => {
  return (
    <ul className={styles.todoList} style={{ listStyleType: "none" }}>
      {todoList.map(function (todo) {
        return (
          <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} handleDoneChange={onDone} path={path} />
        );
      })}
    </ul>
  )
};

TodoList.propTypes = {
  todoList: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  path: PropTypes.string
}

export default TodoList;
