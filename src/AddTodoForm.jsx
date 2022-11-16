import React, { useState } from "react";

function AddTodoForm(props) {

    // Create new state variable named todoTitle with setter setTodoTitle
    const [todoTitle, setTodoTitle] = useState('')

    // declare a new function named handleTitleChange that takes event as a parameter
    function handleTitleChange(event) {
        // retrieve the input value from the event object and store in variable named newTodoTitle
        const newTodoTitle = event.target.value;
        // call the state setter setTodoTitle and pass newTodoTitle
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        // remove the todoTitle variable
            //var todoTitle = event.target.title.value;
        // update onAddTodo callback handler to pass our todoTitle state variable
        props.onAddTodo(todoTitle);
        console.log(todoTitle);
        event.target.reset();
    };

    return (

        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>

            {/* Add value prop equal to todoTitle from component props */} 
            {/* Add onChange prop equal to handleTitleChange function reference */}
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

