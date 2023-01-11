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
        resolve({ data: {todoList: JSON.parse(localStorage.getItem("savedTodoList")) || []},
    });
   }, 2000)
    }).then((result) => {
      setTodoList([...result.data.todoList]);
      // Add another line to set isLoading state to false
      setIsLoading(false);
    });
  }, []);

  useEffect(() => { 
    const todoString = JSON.stringify(todoList)
    if (!isLoading) {
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
