// import React from 'react';
import React, {useEffect, useState} from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';

function App() {  
  
  // const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || ('defaultValue'));
  const [todoList, setTodoList] = useState([]); 

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);
 
  useEffect(() => {
    const getTasks = async () => {
      const res = await fetch('https://api.airtable.com/v0/appWk9dODCbGoxXfg/Default', {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`, 
        }         
      });
    const result = await res.json();
    setTodoList(result.records);
    setIsLoading(false);
    console.log(result);
    };
    getTasks();  
  },[]);

  console.log("todoList", todoList); 

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

        { isLoading?  
          <p>"Loading..."</p>: 
          <ToDoList todoList={todoList} onRemoveTodo={removeTodo}/>
        }        
      </div>
    </>
  );
}

export default App;
