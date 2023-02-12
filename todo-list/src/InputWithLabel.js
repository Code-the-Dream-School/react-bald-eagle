import React, { useRef, useEffect } from "react";
import styles from "./Assets/css/App.module.css"

const InputWithLabel = ({
  todoTitle,
  handleChange,
  name,
  type,
  id,
  boxChecked
}) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      {
        type == "Checkbox" ? <div className="form-check-reverse form-switch">
          <label className={`form-check-label text-muted`} htmlFor={id}> Complete </label>
          <input
            className={`${styles.todoInput} form-check-input`}
            type={type}
            id={id}
            name={name}
            value={todoTitle}
            onChange={handleChange}
            ref={inputRef}
            checked={boxChecked}
          />
        </div> : <>
          <label className={`form-label text-muted`} htmlFor={id}></label>
          <input
            className={`${styles.todoInput} form-control-md`}
            type={type}
            id={id}
            name={name}
            value={todoTitle}
            onChange={handleChange}
            ref={inputRef}
            checked={boxChecked}
          />
        </>
      }
    </>
  );
};

export default InputWithLabel;
