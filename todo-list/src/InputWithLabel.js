import React from "react";

const InputWithLabel = ({ todoTitle, handleTitleChange }) => {
  return (
    <>
      <label htmlFor="TodoTitle"> Title </label>
      <input
        type="text"
        id="TodoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  );
};

export default InputWithLabel;
