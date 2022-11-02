import React from 'react'

const TodoListItem = (props) => {
    return (
        <li key={props.id}>
            <b>{props.todo.title}</b>
        </li>
    )
}

export default TodoListItem
