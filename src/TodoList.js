import * as React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <React.Fragment key={todo.id}>
            <TodoListItem todo={todo} onRemoveTodo={onRemoveTodo} />
            <br />
          </React.Fragment>
        );
      })}
    </ul>
  );
}

export default TodoList;
