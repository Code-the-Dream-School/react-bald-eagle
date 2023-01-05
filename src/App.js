import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import {useState, useEffect} from 'react';

//Exercise 1.5 "Create Custom Hook"
const useSemiPersistentState = () => {

  //Exercise 1.5 "Save Todo List in Storage" item 8-13 
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  //Exercise 1.5 "Save Todo List in Storage" item 1-7
  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList))
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const [newTodo, setNewTodo] = useState(''); 

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  //Exercise 1.5 "Create Custom Hook"
  const [todoList, setTodoList] = useSemiPersistentState();

  return (
    <>
      <h1>Todo List</h1>
       <AddTodoForm onAddTodo={addTodo} />
       <p>{newTodo}</p>
       <TodoList todoList={todoList}/>
    </>
  );
}

export default App;