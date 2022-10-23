import React from 'react'


const TodoList = () => {
    const todoList = [
        { id: 1, title: "study" },
        { id: 2, title: "code" },
        { id: 3, title: "complete assigment" },
      ];
  return (
    <div>
        <ul> 
       {todoList.map((todo, index) => {
        return (
        <li key={index}>{todo.title}
        </li>
        )
       })}
        </ul>
        </div>
  )
}

export default TodoList