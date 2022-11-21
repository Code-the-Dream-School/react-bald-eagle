import React from "react";
import TodoListItem from "./TodoListItem";

// function to list from todos from array
function TodoList(props){
  console.log(props);
    return(
      <ul>
        {
          props.todoList.map(item => <TodoListItem item={item} key={item.id} />)
        }
        </ul>
    )
};



export default TodoList;