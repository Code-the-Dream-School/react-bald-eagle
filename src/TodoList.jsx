import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map(function(todo) {  
        return (
          <React.Fragment key={todo.id}>
            <TodoListItem 
              todo={todo} 
              onRemoveTodo={() => onRemoveTodo(todo.id)} 
            />
          </React.Fragment>
        )
      })};
    </ul>
  )
};

export default TodoList