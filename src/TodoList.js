import React from "react";
import TodoListItem from "./TodoListItem";

 
const Todolist = () => {
  const todoList = [
    {
      id: '1',
      title: 'Complete assignment'
    },
    {
      id: '2',
      title: 'Finish reading Road to React'
    },
    {
      id: '3',
      title: 'Listen to Podcast episode.'
    }
 
  ]
   return(
    <ul>
      {todoList.map((todo) =>(
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
   )
};

export default Todolist;