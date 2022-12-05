import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import {useState, useEffect} from 'react';

const useSemiPersistentState = () => {

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList))
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const [newTodo, setNewTodo] = useState(''); 

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  //Exercise 1.6 "Add Remove Button to List Items"
  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  const [todoList, setTodoList] = useSemiPersistentState();

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  );
}

export default App;