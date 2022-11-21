import React, { useState } from "react";


// Function to add form for todo list
function AddTodoForm(props){
    const [todoTitle, setTodoTitle] = useState('');
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }
    const handleAddTodo  = (event) => {
        event.preventDefault();
        props.onAddTodo({title: todoTitle, id:Date.now()});
        // event.target.reset();
        console.log(event.target.title.value);
        setTodoTitle('');
    }
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input 
                id="todoTitle" 
                type="text" 
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}
                />
            <input type="submit" value="Add" />
        </form>
    );
}

export default AddTodoForm;