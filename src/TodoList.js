import * as React from 'react';
import TodoListItem from './TodoListItem';
  
const TodoList = ({todoList}) => {  
  return (
      <ol>
        {todoList.map(function(todo) {
          return (
            <TodoListItem key={todo.id} todo={todo} />
          )
        })}
      </ol>
  );
};
export default TodoList;