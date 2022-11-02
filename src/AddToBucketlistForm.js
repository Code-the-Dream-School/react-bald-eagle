import React from "react";

const AddToBucketListForm = (props) => {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    props.onAddTodo(todoTitle);
    event.target.title.value = "";
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="BucketListTitle">Title</label>
      <input id="BucketListTitle" name="title" />
      <button>Add</button>
    </form>
  );
};

export default AddToBucketListForm;
