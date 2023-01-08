import React, { useEffect, useReducer } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import ListReducer from "./Reducer";

const App = () => {
  const [todoList, dispatchTodoList] = useReducer(ListReducer,
    {data: {}, isLoading: false, isError: false})


  const asyncData = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      }
    }

    dispatchTodoList({type: 'LIST_FETCH_INIT'})
    try {
      const response = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Tasks`, options)
    
      if (response.ok) {
        const data = await response.json()

        dispatchTodoList({type: 'LIST_FETCH_SUCCESS', payload: [...data.records]})
      } else {
        dispatchTodoList({type: 'LIST_FETCH_FAILURE'})
      }
    }
    catch {
      dispatchTodoList({type: 'LIST_FETCH_FAILURE'})
    }
  }
  
  useEffect(() => {
    asyncData()
  }, [])

  // this usEffect handles the addition to and retreival of items from localStorage 
  // useEffect(() => {
  //   if (todoList.isLoading) {
  //     asyncData(JSON.parse(localStorage.getItem("savedTodoList")) || [])
  //   } else {
  //     localStorage.setItem("savedTodoList", JSON.stringify(todoList.data));
  //   }
  // }, [todoList.data, todoList.isLoading]); // passing value and key variables as dependencies to sideEffect

  const addTodo = (newTodo) => {
    dispatchTodoList({type: 'LIST_FETCH_UPDATE', payload: [newTodo, ...todoList.data]});
  };

  // decided to pass the item as opposed to the item id here
  const removeTodo = (item) => {
    const newTodos = todoList.data.filter((todo) => todo.id !== item.id);
    dispatchTodoList({type: 'REMOVE_LIST', payload: newTodos});
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Todo List</h1>

        <AddTodoForm onAddTodo={addTodo} />

        {todoList.isError && <p>Something went wrong...</p>}

        {todoList.isLoading ? <p>Loading...</p>
          : todoList.data.length > 0 ?
            <TodoList todoList={todoList.data} onRemoveTodo={removeTodo} /> : 
            <p>Placeholder</p> 
        }
      </div>
    </>
  );
};
export default App;
