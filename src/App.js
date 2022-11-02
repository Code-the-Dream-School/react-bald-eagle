import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


function App() {
  
  return (
    
    <div style={{  }}> 
        <h1>To Do List</h1>
          <TodoList />
          <AddTodoForm />
    </div>
  );
}

export default App;
