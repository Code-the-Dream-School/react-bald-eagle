import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList }) => {
 
  return (
    <div>
      <ul>
        {todoList.map((item) => {
      return <TodoListItem key={item.id} todo={item.title} />
        })}
      </ul>
    </div>
  )
}
  
export default TodoList;
