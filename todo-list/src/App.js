import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || initialState
  )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key])

  return [value, setValue]
}

const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState('savedTodoList', '');

  const addTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo List</h1>

      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={ todoList } />
    </div>
  );
};
export default App;
