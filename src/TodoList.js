import React from "react";

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
        <>
          <ul>
            {todoList.map(function(item){
                return <li key={item.id}>{item.title}</li>
              })}
          </ul>
        </>
    );
}

export default TodoList;
