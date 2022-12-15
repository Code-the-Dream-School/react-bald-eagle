import React from "react";
import TodoListItem from "./TodoListItem";

// Pass onRemoveTodo prop as a callback handler prop named onRemoveTodo to the TodoListItem component
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
  );
};

export default TodoList