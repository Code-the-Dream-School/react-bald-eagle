import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({ children, todoTitle, handleTitleChange }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor="title">{children} </label>
      <input
        type="text"
        ref={inputRef}
        value={todoTitle}
        name="title"
        placeholder="Add todo Item"
        onChange={handleTitleChange}
      />
    </>
  );
};

InputWithLabel.propTypes = {
  children: PropTypes.string,
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
};
export default InputWithLabel;
