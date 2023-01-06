import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from "./AddTodoForm";

function App() {

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    new Promise ((resolve, reject) => {
      // ***Mimic a loading delay***
      setTimeout(() => resolve({ data: {todoList: JSON.parse(localStorage.getItem("savedTodoList")) ?? []
      }}), 2000)
    // Chain a then method to your Promise constructor
    }).then(
      // Pass in a function with parameter "result"
      (result) => {
        // Use the state setter to update the list
        setTodoList(
          // Pass the todoList from your result object
          [...result.data.todoList]
        )
    }
    );
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
