import React from "react";

function AddTodoForm(props) {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    props.onAddTodo(todoTitle);
    event.target.title.value = "";
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="search">Title </label>
      <input id="todoTitle" type="text" name="title" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
