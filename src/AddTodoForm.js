import React from "react";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = ({ onAddTodo }) => {
  //Create new state variable named todoTitle with setter setTodoTitle
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    console.log(newTodoTitle);
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo({
      title: todoTitle,
      id: Date.now()
    });
    // console.log("success");
    setTodoTitle("");
  };
  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel handleTitleChange={handleTitleChange}>
       <b>Title:</b> 
      </InputWithLabel> 
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
