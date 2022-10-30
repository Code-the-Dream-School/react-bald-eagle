import React from "react";

function TodoListItem(props){
    return (<li key={props.item.id}>{props.item.title}</li>);
}

export default TodoListItem;