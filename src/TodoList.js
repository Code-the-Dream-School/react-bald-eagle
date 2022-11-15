import React from 'react';
import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
    console.log(TodoList);
    return (
        props.todoList.map(item => <TodoListItem key={item.id} item={item} />)
    );
}
