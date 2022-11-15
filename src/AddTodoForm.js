import React, { useState } from "react";


export default function AddTodoForm(props) {
    const [todoTitle, setTodoTitle] = useState('')
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };
    const handleAddTodo = (event) => {
        event.preventDefault();
        // const todoTitle = <li>{event.target.title.value}</li>;
        props.onAddTodo({ title: todoTitle, id: Date.now() });
        // props.onAddTodo(todoTitle);
        console.log(event.target.title.value);
        // event.target.reset();
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
