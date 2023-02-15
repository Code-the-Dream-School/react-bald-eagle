import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodoForm from "./components/AddTodoForm";
import style from "./TodoListItem.module.css";

import TodoList from "./components/TodoList";

export default function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  function addTodo(newTodo) {
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
  React.useEffect(() => {
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

  React.useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
      return;
    }
  }, [todoList, isLoading]);

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
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </div>
          }
        ></Route>
        <Route path="/new" element={<h1>New Page Content</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
