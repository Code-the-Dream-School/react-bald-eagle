import React from "react";

function AddTodoForm(props) {

    const handleAddTodo = (event) => {
        event.preventDefault();
        let todoTitle = event.target.title.value;
        console.log(todoTitle);
        event.target.reset();
        props.onAddTodo({title: todoTitle}); // why title:  ?? otherwise it does not appear below form
        // todoList.push(props.todo.newTodo);
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title: </label><br />
            <input id="todoTitle" type="text" name="title" />
            <button>Add</button>
        </form>
    )
}

export default AddTodoForm;