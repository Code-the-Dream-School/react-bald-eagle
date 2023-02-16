import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';


const TodoList = ({ todoList, onRemoveTodo }) => {
 
  return (
    <>
      <ul>
        {todoList.map((todoListItem) => (
          <TodoListItem key={todoListItem.id} todo={todoListItem} onRemoveTodo={onRemoveTodo}/>
        ))}
      </ul>
    </>
  ); 
  // console.log(todoList);
}

// exercise 4.1
TodoList.propTypes = {
  todoList: PropTypes.object,
  onRemoveTodo: PropTypes.func,
}
  
export default TodoList;
