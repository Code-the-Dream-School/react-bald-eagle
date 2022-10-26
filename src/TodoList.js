import React from 'react';


const todoList = [
    {
        id: 1,
        title: 'Start assignment',
    },
    {
        id: 2,
        title: 'Important assignment',
    },
    {
        id: 3,
        title: 'Complete assignment',
    },
];

function TodoList() {
    return (
        <ul>
            {
                todoList.map(item => (<li key={item.id}>{item.title}</li>))
            }
        </ul>
    );
}

export default TodoList;
