import React from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    console.log(newTodoTitle);
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Title: todoTitle,
            },
          }),
        }
      );
      if (!response.ok) {
        throw new Error(
          `Error! Todo was not created, status code: ${response.status}`
        );
      }
      const newTodo = await response.json();
      onAddTodo(newTodo);
      setTodoTitle("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        <b>Title:</b>
      </InputWithLabel>
      <button type="submit">
        <img
          src="https://img.icons8.com/cute-clipart/20/plus-math.png"
          alt=""
        />
      </button>
    </form>
  );
};

AddTodoForm.prototypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;
