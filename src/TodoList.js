import React from "react";
import TodoListItem from "./TodoListItem";

// function to list from todos from array
function TodoList(){
    const todoList = [
        {
          'id':1,
          'title':'waitting assignment'
        }, {
          'id':2,
          'title':'ongoing assignment'
        }, {
          'id':3,
          'title':'Complete assignment'
        },
      ];
    return (
      <ul>
        {todoList.map(function(item){
            return (<TodoListItem item={item} key={item.id} />);
          })}
      </ul>
    );
}



export default TodoList;
