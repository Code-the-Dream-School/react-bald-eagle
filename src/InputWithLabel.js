import React from "react";
const InputWithLabel = (props) => {
  return (
    <>
      <label htmlFor="title">{props.children} </label>
      <input
        type="text"
        //
        value={props.todoTitle}
        name="title"
        id="todoTitle"
        onChange={props.handleTitleChange}
        autoFocus
      />
    </>
  );
};

export default InputWithLabel;
