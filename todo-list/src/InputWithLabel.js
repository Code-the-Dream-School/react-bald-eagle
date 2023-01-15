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
      <label className="form-label text-muted" htmlFor={id}> {children} </label>
      <textarea
        className="todo-input form-control"
        type={type}
        id={id}
        name={title}
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      ></textarea>
    </>
  );
};

export default InputWithLabel;
