import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const [isLoading, setIsLoading] = useState(true)

  const [isError, setIsError] = useState(false)

  // this simulates asynchronous load when app is initialized
  // useEffect(() => {
  //   new Promise((resolve) => {
  //     setTimeout(() => resolve({ data: { todoList: todoList } }),
  //       2000
  //     );
  //   }).then((result) => {
  //     setTodoList(result.data.todoList)
  //     setIsLoading(false)
  //   }).catch(() => {
  //     setIsError(true)
  //   })
  // }, []);

  // the above code was used beceause the following warning was being received
  // in the console when using the useEffect hook

  // Warning: Maximum update depth exceeded. 
  // This can happen when a component calls setState inside useEffect, 
  // but useEffect either doesn't have a dependency array, 
  // or one of the dependencies changes on every render.

  // the following block has been used instead:

  const asyncData = (items) => {
    new Promise((resolve) => {
      setTimeout(() => resolve({ data: { todoList: items } }),
        2000
      );
    }).then((result) => {
      setTodoList(result.data.todoList)
      setIsLoading(false)
    }).catch(() => {
      setIsError(true)
    })
  }

  // this usEffect handles the addition to and retreival of items from localStorage 
  useEffect(() => {
    if (isLoading) {
      asyncData(JSON.parse(localStorage.getItem("savedTodoList")))
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
