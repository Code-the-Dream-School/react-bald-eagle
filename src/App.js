// import React from 'react';
import React, {useEffect, useState} from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';


function App() {  
  
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || ('defaultValue'));

  useEffect(() => {}, []);

  console.log("todoList", todoList);  
  
  const addTodo = (newTodo) => {
  setTodoList([...todoList, newTodo]);  
  }
  
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList])

  const removeTodo = (item) => {
    const newTodo = todoList.filter(
      (todo) => item.id !== todo.id
    );
    setTodoList(newTodo);
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Todo List</h1>
        <AddToDoForm onAddTodo={addTodo}/>
        <ToDoList todoList={todoList} onRemoveTodo={removeTodo}/>    
        {/* <p>New Task: {newTodo}</p> */}
      </div>
    </>
  );
}

export default App;
