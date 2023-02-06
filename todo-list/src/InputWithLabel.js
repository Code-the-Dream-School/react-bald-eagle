import React, { useRef, useEffect } from "react";

const InputWithLabel = ({
  todoTitle,
  handleChange,
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
      <input
        className="todo-input form-control-md"
        type={type}
        id={id}
        name={title}
        value={todoTitle}
        onChange={handleChange}
        ref={inputRef}
      />
    </>
  );
};

export default InputWithLabel;
