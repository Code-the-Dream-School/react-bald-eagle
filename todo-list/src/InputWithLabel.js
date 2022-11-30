import React from "react";

const InputWithLabel = ({ todoTitle, handleTitleChange, title, type, id }) => {
  return (
    <>
      <label htmlFor={id}> {title} </label>
      <input
        type={type}
        id={id}
        name={title}
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  );
};

export default InputWithLabel;
