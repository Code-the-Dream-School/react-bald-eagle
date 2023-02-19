import React from 'react';
import InputWithLabel from './InputWithLabel';
import { useState } from "react";
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const AddTodoForm = ({ onAddTodo }) => {
 
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ fields: { Title: todoTitle }, id: Date.now() });
    setTodoTitle('');
  }

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
        <strong>Title</strong>
        </InputWithLabel>
        <button className = {style.ButtonClass} type="submit">Add</button>
      </form>
    </>    
  );
}; 

 // exercise 4.1
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
}

export default AddTodoForm;
