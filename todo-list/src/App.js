import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

// used key and initial state as args to make function reusable across components
const useSemiPersistentState = (key, initialState) => {
  // used value and setValue here for reusability with other components
  const [value, setValue] = useState(
    // checking for item in local storage, if return falsey then use initialState
    JSON.parse(localStorage.getItem("savedTodoList")) || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]); // passing value and key variables as dependencies to sideEffect

  return [value, setValue]; // return value and setValue for reusability by different components
};

const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState("savedTodoList", []);

  const addTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  };

  const removeTodo = (item) => {
    const newTodos = todoList.filter((todo) => todo.id !== item.id);
    setTodoList(newTodos);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Todo List</h1>

        <AddTodoForm onAddTodo={addTodo} />

        <TodoList todoList={todoList} />
      </div>
    </>
  );
};
export default App;
