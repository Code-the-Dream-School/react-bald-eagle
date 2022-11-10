import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import {useState} from 'react'; 

 function App(){
  const [newTodo, setNewTodo] = useState("");
   return (
     <div>
       <h1>Todo List</h1>
       <AddTodoForm onAddTodo={setNewTodo}/>
       <TodoList />
       <p>{newTodo}</p>
     </div>

   )
 }

 export default App;
