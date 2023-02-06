import React, { useState, useEffect, useReducer, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListReducer from "./Reducer";
import NewList from "./New"
import CurrentList from "./Current"
import "./App.css"

const App = () => {
  const [todoList, dispatchTodoList] = useReducer(ListReducer,
    { data: {}, isLoading: false, isError: false })
  const [endpoint, setEndpoint] = useState('')


  const fetchTodos = useCallback(async () => {
    if (!endpoint) return

    const options = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      }
    }

    dispatchTodoList({ type: 'LIST_FETCH_INIT' })
    try {
      const response = await fetch(endpoint, options)

      if (response.ok) {
        const data = await response.json()
        dispatchTodoList({ type: 'LIST_FETCH_SUCCESS', payload: [...data.records] })
      } else {
        dispatchTodoList({ type: 'LIST_FETCH_FAILURE' })
      }
    }
    catch {
      dispatchTodoList({ type: 'LIST_FETCH_FAILURE' })
    }
  }, [endpoint])

  const addTodo = async (newTodo) => {
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "records": [
          {
            "fields": {
              "Name": `${newTodo.title}`
            }
          }
        ]
      })
    }

    try {
      const response = await fetch(endpoint, options)

      if (response.ok) {
        fetchTodos()
      }
      dispatchTodoList({ type: 'LIST_FETCH_FAILURE' })
    }
    catch {
      dispatchTodoList({ type: 'LIST_FETCH_FAILURE' })
    }
  };

  const handleDoneChange = async (boolean, todo) => {
    const done = boolean.toString().toLowerCase();
  
    const options = {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "records": [
          { 
            "id": `${todo.id}`,
            "fields": {
              "Name": `${todo.fields.Name}`,
              "Done": `${done}`,
            }
          }
        ]
      })
    }

    try {
      const response = await fetch(endpoint, options)

      if (response.ok) {
        fetchTodos()
      }
      dispatchTodoList({ type: 'LIST_FETCH_FAILURE' })
    }
    catch {
      dispatchTodoList({ type: 'LIST_FETCH_FAILURE' })
    }
  };

  useEffect(() => {
    setEndpoint(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Tasks`)
    setTimeout(() => {
      fetchTodos()
    }, 2000)
  }, [fetchTodos])

  const removeTodo = async (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
    try {
      const response = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Tasks/${id}`, options)

      if (response.ok) {
        fetchTodos();
      }
    }
    catch {
      dispatchTodoList({ type: 'LIST_FETCH_FAILURE' })
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <CurrentList
              todoList={todoList}
              addTodo={addTodo}
              removeTodo={removeTodo}
              onDone={handleDoneChange}
            ></CurrentList>
          }
        >
        </Route>
        <Route
          exact
          path='/new'
          element={
            <NewList
              addTodo={addTodo}
            ></NewList>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
