import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from "./AddTodoForm";

const useSemiPersistentState = () => {

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) ?? []);

  useEffect(() => {
    const todoString = JSON.stringify(todoList)
    localStorage.setItem("savedTodoList", todoString)
  }, [todoList]);

  return [todoList, setTodoList];

}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <React.Fragment>
      <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList}/>
    </React.Fragment>
  );

};

export default App;
