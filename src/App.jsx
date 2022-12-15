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

  //Define a new handler function named removeTodo with parameter id
  function removeTodo(id) {
    // Remove the item with the given id from todoList
    const modifiedTodo = todoList.filter(
      (todo) => id !== todo.id
    )
  // Call the setTodoList state setter and pass the new or modified Array
  setTodoList([...modifiedTodo])
  };

  return (
    <React.Fragment>
      <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        {/* Pass removeTodo as a callback handler prop named onRemoveTodo to the TodoList component */}
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </React.Fragment>
  );

};

export default App;
