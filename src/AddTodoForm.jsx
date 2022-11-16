import React, { useState } from "react";

function AddTodoForm(props) {

    const [todoTitle, setTodoTitle] = useState('')

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        // Update the onAddTodo callback prop to pass an Object instead of a String
        props.onAddTodo({title: todoTitle, id: Date.now()});
            // Disclaimer: we are suggesting Date.now() for now as a placeholder for unique number generation, but in the future you should not use this
        console.log(todoTitle);
        //remove the reset() method and replace it with logic to reset the todoTitle state to an empty String
        setTodoTitle("");
    };

    return (

        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>

            <input 
                type="text" 
                id="todoTitle" 
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}
            />
            <button type="submit">Add</button>
        </form>
    )
};

export default AddTodoForm;

