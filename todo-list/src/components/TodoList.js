import React from "react";
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

export default TodoList;
