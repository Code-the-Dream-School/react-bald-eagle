import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import Header from './Header';
import TodoList from './TodoList';
import './styles/App.css';


function App() {
  var [newTodo, setNewTodo] = useState('');
  return (
    <div>
      <Header />
      <AddTodoForm onAddTodo={setNewTodo} />
      <TodoList />
      {newTodo}
    </div>
  );
}

export default App
