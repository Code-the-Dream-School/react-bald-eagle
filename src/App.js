import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


function App() {
  // create a new state variable named newTodo with 
  // update function named setNewTodo -useState hook
  const [newTodo, setNewTodo] = React.useState('');
  
  //setNewTodo(event.target.value);
  //console.log(`here: ${props.setNewTodo(event.target.value)}`);
 
  // 1.4 - Create new state variable named todoList 
  // with setter setTodoList and default value of an empty Array
  // const [todoList, setTodoList] = React.useState('');

  return (
    
    <div> 
        <h1>Todo List</h1>
          {/* 1.4 Pass todoList state as a prop named todoList to the TodoList component   todoList={todoList}  */}
          <TodoList  />
          <AddTodoForm onAddTodo={setNewTodo}/>
          <p>Display the value of newTodo variable: <strong> {newTodo} </strong></p>
    </div>
  );
}

export default App;
