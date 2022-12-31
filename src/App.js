// import React from 'react';
import React, {useEffect, useState} from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';

// can be written without initialValue in L7,8 and  after have || [] in L8 & omit the [] in L18
const useSemiPersistentState = (initialValue) => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || initialValue );

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList])
  
  return [todoList, setTodoList]  
}

function App() {  
  const [todoList, setTodoList] = useSemiPersistentState([]);  
  console.log("todoList", todoList)  
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);  
  }

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
        <ToDoList todoList={todoList} onRemoveTodo ={removeTodo}/>    
        {/* <p>New Task: {newTodo}</p> */}
      </div>
    </>
  );
}

export default App;
