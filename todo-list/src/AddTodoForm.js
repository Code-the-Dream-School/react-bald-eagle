import React from 'react';

const AddTodoForm = (props) => {
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value
        setTodoTitle(newTodoTitle)
    }

    const handleAddTodo = (event) => {
        event.target.value = ''
        props.onAddTodo({title: todoTitle, id: Date.now()})
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="TodoTitle"> Title </label>
            <input 
                type="text" 
                id="TodoTitle" 
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}
            />
            <button type="submit"> Add </button>
        </form>
    )
}

export default AddTodoForm;
