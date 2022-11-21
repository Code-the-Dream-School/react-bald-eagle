import React, { useState } from 'react';
import TodoList  from './TodoList';
import AddTodoForm from './AddTodoForm';

//main function
function App() {
  const [todoList, setTodoList] = useState([]);
 const addTodo = (newTodo) =>{
  setTodoList([...todoList, newTodo]);
 }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;