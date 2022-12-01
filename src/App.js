import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import useSemiPersistentState from './useSemiPersistentState';

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);  
  }

  const removeTodo = (item) => {
    const modifiedTodo = todoList.filter(
      (todo) => item.id !== todo.id
    );
    setTodoList(modifiedTodo);
  };
 
  return (
    <div>
      <h1>ToDo List</h1>

      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />

    </div>
  );
}

export default App;
