import React, { useRef, useEffect } from "react";

const InputWithLabel = ({
  todoTitle,
  handleTitleChange,
  title,
  type,
  id,
  children,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor={id}> {children} </label>
      <input
        className="todo-input"
        type={type}
        id={id}
        name={title}
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </>
  );
};

export default InputWithLabel;
