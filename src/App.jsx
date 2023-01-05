import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from "./AddTodoForm";

// Delete the useSemiPersistentState function
  // const useSemiPersistentState = () => {

    // const [todoList, setTodoList] = useState(
    //   JSON.parse(localStorage.getItem("savedTodoList")) ?? []);

    // useEffect(() => {
    //   const todoString = JSON.stringify(todoList)
    //   localStorage.setItem("savedTodoList", todoString)
    // }, [todoList]);

  //   return [todoList, setTodoList];

  // }

function App() {

  // Copy the useState and useEffect hooks from useSemiPersistentState function back into App

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) ?? []);

  useEffect(() => {
    const todoString = JSON.stringify(todoList)
    localStorage.setItem("savedTodoList", todoString)
  }, [todoList]);

  // Delete the useSemiPersistentState function call from App
    //const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const modifiedTodo = todoList.filter(
      (todo) => id !== todo.id
    )
  setTodoList([...modifiedTodo])
  };

  return (
    <React.Fragment>
      <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </React.Fragment>
  );

};

export default App;
