import React, { useRef, useEffect } from "react";
import styles from "./Assets/css/App.module.css"

const InputWithLabel = ({
  todoTitle,
  handleTitleChange,
  name,
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
      <label className={`form-label text-muted`} htmlFor={id}> {children} </label>
      <input
        className={`${styles.todoInput} form-control-md`}
        type={type}
        id={id}
        name={name}
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </>
  );
};

export default InputWithLabel;
