import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      { todoList.map((todoListItem) => {  
        return (
          <React.Fragment key={todoListItem.id}>
            <TodoListItem 
              todoList={todoListItem} 
              onRemoveTodo={onRemoveTodo} 
            />
          </React.Fragment>
        )
      })};
    </ul>
  )
};

export default TodoList