import React from "react";

function AddTodoForm() {
  return (
    <form>
      <label htmlFor="todoTitle">Title</label>
      <br />
      <input type="text" id="todoTitle" />
      <br />
      <button>Add</button>
    </form>
  );
}

export default AddTodoForm;
