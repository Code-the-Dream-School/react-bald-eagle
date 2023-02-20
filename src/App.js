import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodoForm from "./components/AddTodoForm";
import style from "./TodoListItem.module.css";

import TodoList from "./components/TodoList";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function addTodo(newTodo) {
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
        body: JSON.stringify({ fields: newTodo }),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        setTodoList([...todoList, { ...newTodo, id: res.id }]);
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
        console.log(result);
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
      .then(() => {
        setTodoList(updatedTodoList);
      });
  }
    const completeTodo = (id) => {
      let updatedTodos = todoList.map((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodoList(updatedTodos);
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
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className={style.Container}>
              <h1>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList
                  todoList={todoList}
                  onRemoveTodo={removeTodo}
                  onEditTodo={editTodo}
                  completeTodo={completeTodo}
                />
              )}
            </div>
          }
        ></Route>
        <Route path="/new" element={<h1>New Page Content</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
