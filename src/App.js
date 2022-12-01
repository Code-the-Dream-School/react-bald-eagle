import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import {useState} from "react";

function App() {
  const [newTodo, setNewTodo] = useState('');
  
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }
  console.log(todoList)

  return (
    <div className="App">
      <h1>Todo List</h1>
       <AddTodoForm onAddTodo={addTodo} />
       <p>{newTodo}</p>
       <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;