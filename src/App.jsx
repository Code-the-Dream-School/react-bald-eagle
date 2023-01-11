import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from "./AddTodoForm";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise ((resolve, reject) => {
      // ***Mimic a loading delay***
      setTimeout(() => {
        resolve({ data: {todoList: JSON.parse(localStorage.getItem("savedTodoList")) || []}, });
      }, 2000)
    }).then((result) => {
      setTodoList([...result.data.todoList]);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => { 
    const todoString = JSON.stringify(todoList)
    if (!isLoading) {
      localStorage.setItem("savedTodoList", todoString)
    }
  }, [todoList, isLoading]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const modifiedTodo = todoList.filter(
      (todo) => id !== todo.id
    )
    setTodoList([...modifiedTodo])
  };

  // Using a ternary operator inside JSX, if isLoading is true render the loading message, otherwise render the TodoList component
  return (
    <React.Fragment>
      <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
          )}
        </div>
    </React.Fragment>
  );

};

export default App;
