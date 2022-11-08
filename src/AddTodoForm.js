import React from 'react';

function AddToDoForm (props) {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value
    console.log(todoTitle);
    event.target.reset();
    props.onAddTodo(todoTitle);
  }
  
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title </label>
      <input id="todoTitle" type="text" name="title" />
      <button>Add</button>
    </form>  
  )
};


export default AddToDoForm;
