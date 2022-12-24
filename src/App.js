import * as React from "react";
// import the AddTodoForm
import AddTodoForm from "./AddTodoForm";
//import Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import the TodoList
import TodoList from "./TodoList";

export default function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

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
    // check that isLoading is false before setting localStorage
    if (isLoading === false) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
      return;
    }
  }, [todoList, isLoading]);
  // addTodo function
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  const MyContent = () => {
    return (
      <>
        <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            )}
      </>
    )
  }

  // remove button
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => id !== todo.id);
    setTodoList(newTodoList);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact>
         <MyContent />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
