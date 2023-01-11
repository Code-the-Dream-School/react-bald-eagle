import React from 'react';

const TodoListItem = ({ item }) => {
    return (
        <li>
            {item.title}
        </li>
    )
}

export default TodoListItem
