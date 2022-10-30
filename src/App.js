import React, { useState } from 'react';
import TodoList  from './TodoList';
import AddTodoForm from './AddTodoForm';

//main function
function App() {
  const [newTodo,setNewTodo] = useState();
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>
        {newTodo}
      </p>
      <TodoList />
    </>
  );
}

export default App;
