import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from './TodoListItem.module.css';

function App() {

  const [todoList, setTodoList] = useState([]
    // JSON.parse(localStorage.getItem("savedTodoList")) || []
  );
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
    //   new Promise ((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve({
    //         data: {
    //           todoList: JSON.parse(localStorage.getItem('savedTodoList')) || [],
    //         },
    //       });
    //     }, 2000);
    //   }).then((result) => {
    //     setTodoList([...result.data.todoList]);
    //     setIsLoading(false);
    //   }); 

    // console.log(process.env.REACT_APP_AIRTABLE_API_KEY)

    useEffect(() => {
  
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    }).then((response) => response.json())
    .then((result) => {
      setTodoList(result.records || []);
      setIsLoading(false)
    })
  }, []);


  useEffect(() => {
    if(!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList,isLoading])

  // const [newTodo, setNewTodo] = useState(''); 

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  const removeTodo = (item) => {
    console.log(item);
    setTodoList(todoList.filter((todo) => item.id !== todo.id));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element=
        {
          <div className={style.wrapper}>
            <h1 style={{ color: "white" }}>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo}/>
            {isLoading ? (<p>Loading...</p>) : 
            <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
            }
          </div>
        }/>
      <Route path="/new" exact element=
      {
        <h1>New Todo List</h1>
      }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;