import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from "./AddTodoForm";

function App() {

  const [todoList, setTodoList] = useState({
    // Update the default state for todoList to be an empty Array
      // JSON.parse(localStorage.getItem("savedTodoList")) ?? []
    todoList: []
  });

  // Define a useEffect React hook with an empty dependency list
  useEffect(() => {
    // Define a new Promise
    new Promise ((
      // Pass in a callback function with parameters "resolve" and "reject"
      resolve, reject
    ) => {
      // ***Mimic a loading delay***
      // Declare a timeout with particular arguments 
      setTimeout(() => {
        // Call the parameter "resolve"
        resolve({
          // Pass in an Object with property "data" as a nested empty Object
          data: {
            // Add a property "todoList"
            todoList:
            // Set value to the initial/default list state
            JSON.parse(localStorage.getItem("savedTodoList")) ?? []
          }
        });
      }, 2000);
    });
  }, []);

  useEffect(() => {
    const todoString = JSON.stringify(todoList)
    localStorage.setItem("savedTodoList", todoString)
  }, [todoList]);

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
