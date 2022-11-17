import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
 
  return (
    
    <div>
      <ul>
        {props.todoList.map((todo)=> {
      return <TodoListItem todo={todo} />
    })}
      </ul>
    </div>
  )
}
  
export default TodoList;
