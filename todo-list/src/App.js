import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const [isLoading, setIsLoading] = useState(true)

  const [isError, setIsError] = useState(false)

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => resolve({ data: { todoList: todoList } }),
        2000
      );
    }).then((result) => {
      console.log(result)
      setTodoList(result.data.todoList)
      setIsLoading(false)
    }).catch(() => {
      setIsError(true)
    })
  }, []);

  useEffect(() => {
    if (isLoading) {
      setTodoList(JSON.parse(localStorage.getItem("savedTodoList")))
    } else {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]); // passing value and key variables as dependencies to sideEffect

  const addTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  };

  // decided to pass the item as opposed to the item id here
  const removeTodo = (item) => {
    const newTodos = todoList.filter((todo) => todo.id !== item.id);
    setTodoList(newTodos);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Todo List</h1>

        <AddTodoForm onAddTodo={addTodo} />

        { isError && <p>Something went wrong...</p>}

        { isLoading ? <p>Loading...</p>
        :
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        }
      </div>
    </>
  );
};
export default App;
