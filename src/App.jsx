import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from "./AddTodoForm";

function App() {

  const [todoList, setTodoList] = useState([]);
  // Create a new state variable named "isLoading" with update function named "setIsLoading" with default value true
  cont [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise ((resolve, reject) => {
      // ***Mimic a loading delay***
      setTimeout(() => resolve({ data: {todoList: JSON.parse(localStorage.getItem("savedTodoList")) ?? []
      }}), 2000)
    }).then((result) => {
      setTodoList([...result.data.todoList])
    });
  }, []);

  useEffect(() => { 
    const todoString = JSON.stringify(todoList)
    // Add an if statement to check that isLoading is false before setting localStorage
    if (isLoading) {
      localStorage.setItem("savedTodoList", todoString)
    }
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
