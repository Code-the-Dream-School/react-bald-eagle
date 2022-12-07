import React, { useState } from "react";
// Refactor AddTodoForm.js to use new InputWithLabel component
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({onAddTodo}) {

    const [todoTitle, setTodoTitle] = useState('')

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        onAddTodo({title: todoTitle, id: Date.now()});
            // Disclaimer: we are suggesting Date.now() for now as a placeholder for unique number generation, but in the future you should not use this
        console.log(todoTitle);
        setTodoTitle("");
    };

    return (

        <form onSubmit={handleAddTodo}>
            {/* Cut the label and input elements */}
            
            {/* <label htmlFor="todoTitle">Title</label>

            <input 
                type="text" 
                id="todoTitle" 
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}
            /> */}

            {/* Pass the necessary props */}
            <InputWithLabel AddTodoForm={AddTodoForm} todoTitle={todoTitle} handleTitleChange={handleTitleChange}/>

            <button type="submit">Add</button>
        </form>
    )
};

export default AddTodoForm;

