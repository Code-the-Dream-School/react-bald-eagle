import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from "./AddTodoForm";

// Import BrowserRouter, Routes, and Route from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
    setTodoList(result.records);
    setIsLoading(false);
  });
  }, []);

  useEffect(() => { 
    const todoString = JSON.stringify(todoList)
    if (!isLoading) {
      localStorage.setItem("savedTodoList", todoString)
    }
  });

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const modifiedTodo = todoList.filter(
      (todo) => id !== todo.id
    )
    setTodoList([...modifiedTodo])
  };
return (
  //  Wrap existing JSX within new BrowserRouter component
  <BrowserRouter>
    {/* Wrap existing JSX within new Routes component */}
    <Routes>
      {/* Wrap existing JSX within new Route component with prop path equal to the root path and prop exact */}
      <Route exact path="/" element=
      {
        
          <React.Fragment>
            <h1>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              <div>
                {isLoading ? 
                  <p>Loading...</p>
                : 
                  <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
                }
              </div>
          </React.Fragment>
        
      } />
    </Routes>
  </BrowserRouter>
);
};

export default App;
