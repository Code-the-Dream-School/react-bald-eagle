import React from "react";
// import addTasks from './AddTodoForm';

function InputWithLabel({ value, onChange, label, name, placeholder, type }) {
  return (
    <>
      {/* below will use label value first, but if empty, then will use children = TodoTitle   */}
      <label>{label}</label>
      <input
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}

export default InputWithLabel;
