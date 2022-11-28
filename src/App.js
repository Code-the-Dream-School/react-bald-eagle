import * as React from "react";
// import the AddTodoForm
import AddTodoForm from "./AddTodoForm";
// import the TodoList
import TodoList from "./TodoList";
export default function App() {
  const [todoList, setTodoList] = React.useState([]);
  function addTodo(newTodo) {
    setTodoList([...todoList, ...newTodo]);
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* showing todo list */}
      <TodoList todoList={todoList} />
      {/* showing the input form */}
      <AddTodoForm onAddTodo={addTodo} />
    </div>
  );
}
