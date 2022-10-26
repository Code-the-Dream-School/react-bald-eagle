import React from 'react';
import TodoList  from './TodoList';
import AddTodoForm from './AddTodoForm';

//main function
function App() {
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </>
  );
}

export default App;
