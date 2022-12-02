import React from "react";
const InputWithLabel = (props) => {
  const inputRef = React.useRef()
  React.useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <>
      <label htmlFor="title">{props.children} </label>
      <input
        type="text"
        ref={inputRef}
        value={props.todoTitle}
        name="title"
        id="todoTitle"
        onChange={props.handleTitleChange}
      />
    </>
  );
};

export default InputWithLabel;
