import React, { useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(() => {
    const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList'));
    return savedTodoList || [];
  });
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);
  return [todoList, setTodoList];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (item) => {
    const modifiedArray = todoList.filter((todo) => item.id !== todo.id);
    setTodoList(modifiedArray);
  };

  return (
    <div>
      <h1> Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App;
