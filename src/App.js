import * as React from "react";
// import the AddTodoForm
import AddTodoForm from "./AddTodoForm";
// import the TodoList
import TodoList from "./TodoList";

export default function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, seIsLoading] = React.useState(true);

  React.useEffect(() => {
    new Promise((resolve, reject) =>
      setTimeout(() => resolve({ data: { todoList: todoList } }), 2000)
    ).then((result) => {
      setTodoList(result.data.todoList);
      seIsLoading(false);
    });
  });
  React.useEffect(() => {
    if (isLoading === false) {
      return todoList;
    }
  });

  //addTodo function
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  //remove button
  const removeTodo = (id) => {
    const newTodolist = todoList.filter((todo) => id !== todo.id);
    setTodoList(newTodolist);
  };
  return (
    <>
      <h1>Todo List</h1>

      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}
