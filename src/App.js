import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import useSemiPersistentState from './useSemiPersistentState';

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);  
  }
 
  return (
    <div>
      <h1>ToDo List</h1>

      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} />

    </div>
  );
}

export default App;
