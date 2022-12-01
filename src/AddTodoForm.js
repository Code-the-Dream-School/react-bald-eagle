import React from 'react';
import {useState} from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  }

  const handleAddTodo = (event) => {
    event.preventDefault()
    onAddTodo({id: Date.now(), title: todoTitle})
    event.target.title.value = ""
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">
        Title
      </label>
      <input
        name="title"
        type="text"
        id="todoTitle"
        value={todoTitle}
        onChange={(event) =>handleTitleChange(event)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AddTodoForm;
