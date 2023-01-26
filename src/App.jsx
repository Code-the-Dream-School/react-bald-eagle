import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from "./AddTodoForm";
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
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element= {
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
        {/* Create a new Route with path "/new" */}
        {/* Create a level-one heading with text "New Todo List" */}
        <Route path="/new" element= {
          <h1>New Todo List</h1>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
