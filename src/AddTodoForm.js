import React from "react";


export default function AddTodoForm(props) {
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = <li>{event.target.title.value}</li>;
        props.onAddTodo(todoTitle);
        console.log(todoTitle);
        event.target.reset();
    }
    return (
        <form onSubmit={handleAddTodo}>
            {/* <ul> */}
            <label htmlFor="todoTitle">Title</label><br />
            <input id="todoTitle" type="text" name="title" />
            <button>Add</button>
            {/* </ul> */}
        </form>
    )
}
