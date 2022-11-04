import React from "react";

function AddTodoForm(props) {
  function handleAddTodo(event) {
    event.preventDefault();
    let todoTitle = event.target.title.value;

    console.log(todoTitle);
    props.onAddTodo(todoTitle);
    event.target.reset();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <br />
      <input name="title" type="text" id="todoTitle" />
      <br />
      <button>Add</button>
    </form>
  );
}

export default AddTodoForm;
