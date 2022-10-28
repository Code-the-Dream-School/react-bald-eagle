import React from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <ToDoList />
      <AddToDoForm />      
     
    </div>
  );
}

export default App;
