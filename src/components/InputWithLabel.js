import React from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({ children, todoTitle, handleTitleChange }) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  InputWithLabel.propTypes = {
    children: PropTypes.any,
    todoTitle: PropTypes.string,
    handleTitleChange: PropTypes.func,
  };
  return (
    <>
      <label htmlFor="title">{children} </label>
      <input
        type="text"
        ref={inputRef}
        value={todoTitle}
        name="title"
        id="todoTitle"
        onChange={handleTitleChange}
      />
    </>
  );
};

export default InputWithLabel;
