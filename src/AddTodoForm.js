import React from "react";

const AddTodoForm = (props) => {
  //Create new state variable named todoTitle with setter setTodoTitle
  const [todoTitle, setTodoTitle] = React.useState();

  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    console.log(newTodoTitle);
    //call the state setter setTodoTitle and pass newTodoTitle
    setTodoTitle(newTodoTitle);
  };
  // In the handleAddTodo function, remove the todoTitle variable and update onAddTodo callback handler to pass our todoTitle state variable instead
  const handleAddTodo = (e) => {
    e.preventDefault();
    props.onAddTodo(todoTitle);
    console.log("success");
    e.target.reset();
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        //retrieve the input value from the event object and store in variable named newTodoTitle
        value={props.todoTitle}
        name="title"
        id="todoTitle"
        onChange={handleTitleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
