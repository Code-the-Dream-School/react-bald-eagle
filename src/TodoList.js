import * as React from 'react';
import TodoListItem from './TodoListItem';
  
const TodoList = ({ todoList, onRemoveTodo }) => {  
  return (
      <ol>
        {todoList.map(function(todo) {
          return (
            // <React.Fragment key={Date.now()}>
            <React.Fragment key={todo.id}>
              <TodoListItem 
                todo={todo} 
                onRemoveTodo={onRemoveTodo}
              />
              <br />
            </React.Fragment>
          )
        })}
      </ol>
  );
};
export default TodoList;