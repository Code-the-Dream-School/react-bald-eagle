import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
  const [newTodo, setNewTodo] = React.useState("");
  return (
    <div>
      <h1>To Do List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>
        Searching for <strong>{newTodo}</strong>
      </p>
      <TodoList />
    </div>
  );
}

export default App;
