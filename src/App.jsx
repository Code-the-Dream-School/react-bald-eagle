import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from "./AddTodoForm";

function App() {

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  //Update the default state for todoList to read your "savedTodoList" item from localStorage
  const [todoList, setTodoList] = useState(
    // Update your default state to parse the value of the "savedTodoList" item
    JSON.parse(localStorage.getItem("savedTodoList")) ?? []);

  //Define a useEffect React hook with todoList as a dependency
  useEffect(() => {
    // convert todoList to a string
    const todoString = JSON.stringify(todoList)
    //Save the todoList inside localStorage with the key "savedTodoList"
    localStorage.setItem("savedTodoList", todoString)
  }, [todoList]);

  return (
    <>
      <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList}/>
    </>
  );

};

export default App;
