import React from 'react';
import AddTodoForm from './AddTodoForm';
import Header from './Header';
import TodoList from './TodoList';


function App() {
  return (
    <div>
      <Header />
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App
