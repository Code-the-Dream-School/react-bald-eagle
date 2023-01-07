import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
    console.log(todo)
    return (
        <li>
            {todo.title || todo.fields.Title} <span> </span>
            <button type="button" onClick={() => onRemoveTodo(todo)}>
                Remove
            </button>
        </li>
    );
};
    
export default TodoListItem;