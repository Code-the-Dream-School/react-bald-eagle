import React from 'react';

const AddTodoForm = () => {
  return (
    <form>
      <label htmlFor="todoTitle">
        Title
      </label>
      <input id="todoTitle">
      </input>
      <button>
        Add
      </button>
    </form>
  )
}

export default AddTodoForm;
