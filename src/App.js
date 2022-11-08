import React from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';

function App() {  
  
  const [newTodo, setNewTodo] = React.useState('');

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <ToDoList />
      <AddToDoForm onAddTodo={setNewTodo}/>    
      <p>New Task: {newTodo}</p>    
    </div>
  );
}

export default App;
