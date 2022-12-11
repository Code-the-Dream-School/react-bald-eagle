import * as React from "react";
// import the AddTodoForm
import AddTodoForm from "./AddTodoForm";
// import the TodoList
import TodoList from "./TodoList";

export default function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("todoList")) || [],
          },
        });
      }, 2000);
    }).then((result) => {
      setTodoList([...result.data.todoList]);
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

  // remove button
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => id !== todo.id);
    setTodoList(newTodoList);
  };

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
  );
}
