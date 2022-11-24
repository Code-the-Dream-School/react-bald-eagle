import React from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';

function App() {  
  
  const [todoList, setTodoList] = React.useState([]);
  // const [newTodo, setNewTodo] = React.useState('');
  
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <AddToDoForm onAddTodo={addTodo}/>
      <ToDoList todoList={todoList}/>    
      {/* <p>New Task: {newTodo}</p>     */}
    </div>
  );
}

export default App;
