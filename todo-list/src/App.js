import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const App = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    setTodoList(todoList)
  }, [todoList]); // passing value and key variables as dependencies to sideEffect

  const addTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  };

  // decided to pass the item as opposed to the item id here
  const removeTodo = (item) => {
    const newTodos = todoList.filter((todo) => todo.id !== item.id);
    setTodoList(newTodos);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Todo List</h1>

        <AddTodoForm onAddTodo={addTodo} />

        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      </div>
    </>
  );
};
export default App;
