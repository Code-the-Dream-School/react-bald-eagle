import React, { useEffect, useState } from 'react';
import TodoList  from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {

  
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')));
 
  useEffect(()=>{
    localStorage.setItem('savedTodoList',JSON.stringify(todoList))
   },[todoList]);

   return [todoList, setTodoList]
}


//main function
function App() {
const [todoList, setTodoList] = useSemiPersistentState();
const addTodo = (newTodo) =>{
  setTodoList([...todoList, newTodo]);
  }

//  useEffect(()=>{
//   localStorage.setItem('savedTodoList',JSON.stringify(todoList))
//  },[todoList]);

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;