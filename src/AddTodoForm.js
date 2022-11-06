import React from "react";


// Function to add form for todo list
function AddTodoForm(props){
    const handleAddTodo  = (event) => {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        // event.target.reset();
        event.target.title.value = "";
        props.onAddTodo(todoTitle);
    }
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" type="text" name="title" />
            <input type="submit" value="Add" />
        </form>
    );
}

export default AddTodoForm;