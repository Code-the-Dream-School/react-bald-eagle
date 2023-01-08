// import React from 'react';
import React, {useEffect, useState} from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';


function App() {  
  
  const [todoList, setTodoList] = useState({
    todoList: [],    
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem('savedTodoList'))            
          },
        });
      }, 2000);
    }).then((result) => {
      setTodoList({ todoList: result.data.todoList, isLoading: false });
    });
  }, []);

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

        {/* {isLoading? (
          <p>"Loading..."</p>  
        ): <ToDoList todoList={todoList} onRemoveTodo={removeTodo}/>} */}

        <ToDoList todoList={todoList} onRemoveTodo={removeTodo}/>    
        {/* <p>New Task: {newTodo}</p> */}
      </div>
    </>
  );
}

export default App;
