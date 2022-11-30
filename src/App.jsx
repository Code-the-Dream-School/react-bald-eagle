import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from "./AddTodoForm";

//Above the App functional component, create a new function named useSemiPersistentState
const useSemiPersistentState = () => {

  //Cut the useState and useEffect hooks from App into useSemiPersistentState

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) ?? []);

  useEffect(() => {
    const todoString = JSON.stringify(todoList)
    localStorage.setItem("savedTodoList", todoString)
  }, [todoList]);

  //Add a return statement in useSemiPersistentState that returns the todoList state variable and setter in an Array
  return [todoList, setTodoList];

}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <>
      <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList}/>
    </>
  );

};

export default App;
