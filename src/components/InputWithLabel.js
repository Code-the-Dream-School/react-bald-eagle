import React from 'react';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

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
        placeholder="Type here..."
      />
    </>
  );
}

// exercise 4.1
InputWithLabel.propTypes = {
  todoTitle: PropTypes.object,
  handleTitleChange: PropTypes.func,
  children: PropTypes.object,
}

export default InputWithLabel;