import React from "react";
 import TodoListItem from "./TodoListItem";


 export default function Todolist(props) {
    console.log(props)
    return(
        <ul>
          {
            props.todoList.map(item => <TodoListItem key={item.id} item={item} />)
          }
           
        </ul>

       )
 };