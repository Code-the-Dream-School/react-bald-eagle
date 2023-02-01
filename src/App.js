import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import Header from './Header';
import TodoList from './TodoList';
import './styles/App.css';

const useSemiPersistentState = () => {

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter(el => el.id !== id);
    setTodoList(newTodoList);
  }
  return (
    <div>
      <Header />
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App
