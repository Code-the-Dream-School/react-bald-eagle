import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList") || "[]")
  );

  //Define a useEffect React hook with todoList as a dependency
  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList)); //Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList"
  }, [todoList]); //useEffect React hook with [todoList] as a dependency

  return [todoList, setTodoList];
};

const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <h1>To Do List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
};

export default App;
