import React, { useState, useEffect, useReducer, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListReducer from "./Reducer";
import NewList from "./New"
import CurrentList from "./Current"
import EditList from "./Edit"

const App = () => {
  const [todoList, dispatchTodoList] = useReducer(ListReducer,
    { data: {}, isLoading: false, isError: false })
  const [endpoint, setEndpoint] = useState('')
  const [user, setUser] = useState('')

  const getUser = () => {
    setUser(prompt('Please enter your name'))
  }

  useEffect(() => {
    getUser()
  }, [])

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
    const formattedTodo = {}

    // format for API
    Object.keys(newTodo).forEach(function (key) {
      if (key !== "id") {
        formattedTodo[key] = newTodo[key]
      }
      return formattedTodo
    })

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
              ...formattedTodo
            }
          }
        ]
      })
    }

    try {
      const response = await fetch(endpoint, options)

      if (response.ok) {
        const newFormat = {
          id: newTodo.id.toString(),
          fields: {
            ...formattedTodo
          }
        }

        const newTodos = [...todoList.data, newFormat]

        dispatchTodoList({
          type: 'LIST_FETCH_SUCCESS',
          payload: [...newTodos]
        })
      }
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
            "fields": {
              "Name": `${todo.fields.Name}`,
              "Done": boolean
            }
      })
    }

    try {
      const response = await fetch(`${endpoint}/${todo.id}`, options)

      if (response.ok) {
        console.log('success')
        // const data = response.json()
        // fetchTodos()
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
        const newTodos = todoList.data.filter(todo => todo.id !== id)

        dispatchTodoList({
          type: 'LIST_FETCH_SUCCESS',
          payload: [...newTodos]
        })
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
              currentUser={user}
            ></CurrentList>
          }
        >
        </Route>
        <Route
          exact
          path='/edit'
          element={
            <EditList
              user={user}
              todoList={todoList}
              removeTodo={removeTodo}
            ></EditList>
          }
        ></Route>
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
