import React from 'react';
import TodoListItem from "./TodoListItem";


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
        todoList.map(item => <TodoListItem key={item.id} item={item} />)
    );
}

export default TodoList;
