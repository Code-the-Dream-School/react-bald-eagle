import React, { useState } from "react";

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

