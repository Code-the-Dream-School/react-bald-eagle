import React, { useState } from "react";

export default function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState('')
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };
    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo({ title: todoTitle, id: Date.now() });
        setTodoTitle('');
    }
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label><br />
            <input id="todoTitle" type="text" name="title" value={todoTitle} onChange={handleTitleChange} />
            <button>Add</button>
        </form>
    )
}
