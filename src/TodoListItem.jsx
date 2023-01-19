import React from 'react';

function TodoListItem({todo, onRemoveTodo}) {
    return (
        <li> 
            {todo.fields.Title}
            <button type="button" onClick={() => onRemoveTodo(todo.id)}>
                Remove
            </button>
        </li>
    );
};

export default TodoListItem;