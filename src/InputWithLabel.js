import React from 'react';
import { useEffect, useRef } from 'react';

const InputWithLabel = ({ 
  todoTitle, 
  handleTitleChange,
  children,
}) => {

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [todoTitle]);

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      &nbsp;
      <input
        ref={inputRef}
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  );
}

export default InputWithLabel;