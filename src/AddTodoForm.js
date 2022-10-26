import React from "react";


// Function to add form for todo list
function AddTodoForm(){
    return (
        <form>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" type="text" />
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;