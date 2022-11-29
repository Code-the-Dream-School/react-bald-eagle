import * as React from "react";
// import the AddTodoForm
import AddTodoForm from "./AddTodoForm";
// import the TodoList
import TodoList from "./TodoList";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(() => {
    const savedTodoList = localStorage.getItem("savedTodoList");
    const parsedSavedTodoList = JSON.parse(savedTodoList);
    return parsedSavedTodoList || [];
  });

  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

export default function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  //addTodo function
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
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
