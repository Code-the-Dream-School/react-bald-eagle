import React from 'react';

function TodoListItem({todoList, onRemoveTodo}) {
    return (
        <li> 
            {todoList.title}
            <button type="button" onClick={() => onRemoveTodo(todoList.id)}>
                Remove
            </button>
        </li>
    );
};

export default TodoListItem;