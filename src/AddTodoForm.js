import React from "react";
const AddTodoForm = () => {
  return (
    <form>
      <label htmlFor="title">Title: </label>
      <input type="text" name="title" id="todoTitle" />
      <button type="text"> Add</button>
    </form>
  );
};

export default AddTodoForm;
