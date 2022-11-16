import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from "./AddTodoForm";

function App() {
  
  const [newTodo, setNewTodo] = useState('');

  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <h1>Todo List</h1>
        <AddTodoForm onAddTodo={setNewTodo} />
        <p>{newTodo}</p>

        <TodoList todoList={todoList}/>
    </>
  );

};

export default App;
