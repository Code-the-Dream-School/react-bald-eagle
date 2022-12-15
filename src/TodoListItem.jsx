import React from 'react';

function TodoListItem({todo, onRemoveTodo}) {
    return (
        <li> 
            {todo.title}
            {/* Add a button element, type "button", inside the list item with text "Remove" */}
            {/* Add an onClick prop to the button element and pass a function that calls onRemoveTodo from props with the current item id as an argument */}
            <button type="button" onClick={() => onRemoveTodo(todo)}>
                Remove
            </button>
        </li>
    );
};

export default TodoListItem;