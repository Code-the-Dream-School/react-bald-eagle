import React from "react";

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

 
function Todolist (){
   return(
    <ul>
    {todoList.map(function(item){
        return <li key={item.id.title}>{item.title}</li>;
    })}
    </ul> 
   )
}

export default Todolist;