import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from "./AddTodoForm";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Remove the placeholder "Promise"
      // new Promise ((resolve, reject) => {
      //   // ***Mimic a loading delay***
      //   setTimeout(() => {
      //     resolve({ data: {todoList: JSON.parse(localStorage.getItem("savedTodoList")) || []}, });
      //   }, 2000)

    // Using the Fetch API, create a "GET" request
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, { //url: the url of your request
      method: 'GET',
      // add the property 'headers' as an object
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}` //the token to authorize the request
      },
    })
    // Chain a then method to your fetch call and pass it a function that returns the response JSON data
    .then((response) => {
      return response.json();
    })
    .then((result) => {
    // Update the setToDoList call to reference the new result format
    setTodoList(result.records);
    setIsLoading(false);
  });
  }, []);

  useEffect(() => { 
    const todoString = JSON.stringify(todoList)
    if (!isLoading) {
      localStorage.setItem("savedTodoList", todoString)
    }
  });

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const modifiedTodo = todoList.filter(
      (todo) => id !== todo.id
    )
    setTodoList([...modifiedTodo])
  };

  return (
    <React.Fragment>
      <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <div>
          {isLoading ? 
            <p>Loading...</p>
           : 
            <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
          }
        </div>
    </React.Fragment>
  );

};

export default App;
