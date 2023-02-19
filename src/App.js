import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from './components/TodoListItem.module.css';
import SortTodoList from './components/SortTodoList';

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
  
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?sort[0][field]=Title&sort[0][direction]=asc`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    }).then((response) => response.json())
    .then((result) => {
      // exercise 5.1
      result.records.sort((objectA, objectB) => {
        if (objectA.fields.Title < objectB.fields.Title) {
          return -1;
      } else if (objectA.fields.Title > objectB.fields.Title) {
          return 1;
      } else {
          return 0;
      }
      })
      // end of exercise 5.1
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
          <div>
            <nav>
              <a href="">Home</a> |
              <a href="">Todo List</a> |
              <a href="">About Us</a> |
            </nav>
            <img src="https://cdn-icons-png.flaticon.com/128/4394/4394562.png" alt="List" width="60" height="60"></img>
            
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo}/>
            {isLoading ? (<p>Loading...</p>) : 
            <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
            }
            <SortTodoList todoList={todoList}/>
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