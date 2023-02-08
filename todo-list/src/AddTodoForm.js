import React from "react";
import InputWithLabel from "./InputWithLabel";
import styles from './Assets/css/App.module.css'

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
  };

  return (
    <form className={`${styles.inputForm} form-floating`} onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleChange={handleTitleChange}
        title="Title"
        type="text"
        id="TodoTitle"
      >
      </InputWithLabel>
      <button className={`${styles.addTodoButton} btn btn-dark`} type="submit"> Add Task </button>
    </form>
  );
};

export default AddTodoForm;
