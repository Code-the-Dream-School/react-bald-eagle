import React from 'react';
import TodoListItem from './TodoListItem';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';


const TodoList = ({ todoList, onRemoveTodo, onhandleToggleDone }) => {
  const [sortAscending, setSortAscending] = useState(true);

  const toggleSortOrder = () => {
    setSortAscending(!sortAscending);
  } 

  const sortedRecords = [...todoList].sort((a, b) => {
    const titleA = a.fields.Title.toLowerCase();
    const titleB = b.fields.Title.toLowerCase();
    if (titleA < titleB) {
      return sortAscending ? -1 : 1;
    } else if (titleA > titleB) {
      return sortAscending ? 1 : -1;
    } else {
      return 0;
    }
  });

  return (
    <>
      <button className = {style.SortButton} onClick={toggleSortOrder}>
        Sort by Title ({sortAscending ? 'Asc' : 'Desc'})
      </button>
      <ul className= {style.Ul}>
        {sortedRecords.map((todoListItem) => (
          <TodoListItem key={todoListItem.id} todo={todoListItem} onRemoveTodo={onRemoveTodo} onhandleToggleDone={onhandleToggleDone} />
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
