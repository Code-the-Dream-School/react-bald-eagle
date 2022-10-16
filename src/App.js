import React from "react";
// import the AddTodoForm
import AddTodoForm from "./AddTodoForm";
// import the TodoList
import TodoList from "./TodoList";


export default function App() {
  return (
    <div className="App">
      
      <h1>Todo List</h1>
      {/* showing todo list */}
      <TodoList />
      {/* shoeing the input form */}
      <AddTodoForm/>
    </div>
  );
}


