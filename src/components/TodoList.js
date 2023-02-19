import React from 'react';
import TodoListItem from './TodoListItem';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';


const TodoList = ({ todoList, onRemoveTodo }) => {
 
  return (
    <>
      <ul className= {style.Ul}>
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
