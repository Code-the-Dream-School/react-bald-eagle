import React from 'react';

const AddTodoForm = (props) => {
    const handleAddTodo = (event) => {
        event.preventDefault()
        const todoTitle = event.target.title.value
        console.log(todoTitle)
        props.onAddTodo(todoTitle)
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="TodoTitle"> Title </label>
            <input type="text" id="TodoTitle" name="title"/>
            <button type="submit"> Add </button>
        </form>
    )
}

export default AddTodoForm;
