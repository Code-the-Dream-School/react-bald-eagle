import React from "react";

export default function InputWithLabel(props) {
  return (
    <>
      <label htmlFor="title">{props.label} </label>
      <input
        type="text"
        //
        value={props.todoTitle}
        name="title"
        id="todoTitle"
        onChange={props.handleTitleChange}
      />
    </>
  );
}
