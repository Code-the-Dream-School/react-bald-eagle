import React from "react";

const AddTodoForm = (props) =>{
    const handleAddTodo = (event) =>{
        event.preventDefault();
        const todoTitle = event.target.elements.title.value;
        props.onAddTodo(todoTitle);
        console.log('done');
        event.target.reset();
       
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input type='text' id="TodoTitle" name="title"/>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm;
