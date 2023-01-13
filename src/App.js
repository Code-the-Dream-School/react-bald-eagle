import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import {useState, useEffect} from 'react';

// const useSemiPersistentState = () => {

//  const [todoList, setTodoList] = useState(
//    JSON.parse(localStorage.getItem("savedTodoList")) || []
//  );

//  useEffect(() => {
//     localStorage.setItem("savedTodoList", JSON.stringify(todoList))
//   }, [todoList]);

//   return [todoList, setTodoList];
// };

function App() {

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  // excercise 1.7 Async

useEffect(() => {
  new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          todoList: JSON.parse(localStorage.getItem('savedTodoList')) || [],
        },
      });
    }, 2000);
  }).then((result) => {
    setTodoList([...result.data.todoList]);
    setIsLoading(false);
  });
}, []);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if(!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  },[todoList,isLoading])

  const [newTodo, setNewTodo] = useState(''); 

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  const removeTodo = (item) => {
    console.log(item);
    setTodoList(todoList.filter((todo) => item.id !== todo.id));
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? ( 
        <p>Loading...</p> 
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      )}
      
    </>
  );
}

export default App;