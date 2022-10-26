import React from "react";


export default function AddTodoForm() {
    return (
        <form>
            <label htmlFor="todoTitle">Title</label><br />
            <input id="todoTitle" />
            <button>Add</button>
        </form>
    )
}
