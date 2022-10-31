import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  
  const [newTodo, setNewTodo] = React.useState('');

  return (
    <div>
      <h1>ToDo List</h1>

      <AddTodoForm onAddTodo={setNewTodo} />

      <p>This is the new ToDo: <strong><i>{newTodo.title}</i></strong></p>

      <TodoList todoTitle={newTodo} />  

    </div>
  );
}

export default App;
