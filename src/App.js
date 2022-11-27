import * as React from "react";
// import the AddTodoForm
import AddTodoForm from "./AddTodoForm";
// import the TodoList
import TodoList from "./TodoList";
export default function App() {
  const [newTodo, setNewTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* showing todo list */}
      <TodoList todoList={todoList} />
      {/* showing the input form */}
      <AddTodoForm onAddTodo={setNewTodo} />
      {/*  Below the <AddTodoForm /> component, add a paragraph element */}
      <p>Title: {newTodo}</p>
    </div>
  );
}
