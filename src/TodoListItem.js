import React from "react";

function TodoListItem(props) {

    return (
        <span><li>{props.todo.title}</li></span> 
    )
}
export default TodoListItem;
