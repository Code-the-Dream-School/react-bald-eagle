import React from "react";
import TodoList from "./TodoList.js";
import AddTodoForm from "./AddTodoForm.js";

function App() {
  return (
    <div>
      <h1> Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
