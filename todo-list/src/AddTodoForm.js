import React from 'react';

const AddTodoForm = (props) => {
    const handleAddTodo = (event) => {
        event.preventDefault()
        const todoTitle = event.target.title
        props.onAddTodo(todoTitle)
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="TodoTitle"> Title </label>
            <input id="TodoTitle" name="title"/>
            <button type="submit"> Add </button>
        </form>
    )
}

export default AddTodoForm;
