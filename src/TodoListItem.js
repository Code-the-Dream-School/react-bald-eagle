import React from "react";

function TodoListItem(props){
    return (<li>{props.item.title}</li>);
}

export default TodoListItem;