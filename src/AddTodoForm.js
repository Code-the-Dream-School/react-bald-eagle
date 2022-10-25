import React from "react";

const AddTodoForm = (props) => {
  const handleAddTodo = (e) => {
    e.preventDefault();
    const todoTitle = e.target.elements.title.value;
    props.onAddTodo(todoTitle);
    console.log('success');
    e.target.reset();
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="title">Title: </label>
      <input type="text" name="title" id="todoTitle" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
