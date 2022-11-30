import React from "react";

const InputWithLabel = ({ todoTitle, handleTitleChange, title, type, id, children }) => {
  return (
    <>
      <label htmlFor={id}> {children} </label>
      <input
        type={type}
        id={id}
        name={title}
        value={todoTitle}
        onChange={handleTitleChange}
				autoFocus
      />
    </>
  );
};

export default InputWithLabel;
