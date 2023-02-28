import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddTodoForm from "./components/AddTodoForm";
import style from "./components/TodoListItem.module.css";

import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function addTodo(newTodo) {
    console.log("New todo:", newTodo.fields.Title);

    if (!newTodo.fields.Title || /^\s*$/.test(newTodo.fields.Title)) {
      return;
    }

    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTodo }),
      }
    )
      .then((response) => response.json())

      .then((res) => {
        setTodoList([...todoList, newTodo]);
      });
  }

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setTodoList([...result.records]);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
      return;
    }
  }, [todoList, isLoading]);

  function editTodo(updatedTodo) {
    if (!updatedTodo.fields.Title || /^\s*$/.test(updatedTodo.fields.Title)) {
      return;
    }
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return { ...updatedTodo };
      }
      return todo;
    });

    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${updatedTodo.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields: updatedTodo.fields }),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        console.log("Todo Item Updated:", updatedTodo.fields.Title);
        setTodoList(updatedTodoList);
      });
  }
  const completeTodo = (id) => {
    let updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        fetch(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${todo.id}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fields: {
                ...todo.fields,
                IsComplete: !todo.fields.IsComplete,
              },
            }),
          }
        )
          .then((response) => response.json())
          .then(() => {
            setTodoList(updatedTodos);
          });
        todo.fields.IsComplete = !todo.fields.IsComplete;
        console.log('Todo Status updated to:', todo.fields.IsComplete);
      }
      return todo;
    });
  };

  const removeTodo = (id) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res);

        const newTodoList = todoList.filter((todo) => id !== todo.id);
        setTodoList(newTodoList);
      });
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              todoList={todoList}
              isLoading={isLoading}
              completeTodo={completeTodo}
            />
          }
        ></Route>
        <Route
          path="/todoapp"
          element={
            <div className={style.Container}>
              <h1>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList
                  todoList={todoList}
                  onAddTodo={addTodo}
                  onRemoveTodo={removeTodo}
                  onEditTodo={editTodo}
                  completeTodo={completeTodo}
                />
              )}
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
