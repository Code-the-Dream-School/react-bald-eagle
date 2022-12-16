import React from "react";
import TodoListItem from "./TodoListItem";

// function to list from todos from array
function TodoList(props){
  //console.log(props.onRemoveTodo);
    return(
      <ul>
        {
          props.todoList.map(item => <TodoListItem item={item} key={item.id} onRemoveTodo={props.onRemoveTodo} />)
        }
        </ul>
    )
};



export default TodoList;