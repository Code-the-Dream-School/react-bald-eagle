import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import Header from './Header';
import TodoList from './TodoList';
import './styles/App.css';


function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    setTodoList([todoList, newTodo])
  };
  // var [newTodo, setNewTodo] = useState('');
  return (
    <div>
      <Header />
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
      {/* {newTodo} */}
    </div>
  );
}

export default App
