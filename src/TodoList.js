import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => {
    return (
        todoList.map((item) => <TodoListItem key={item.id} item={item} />)
    );
}

export default TodoList;
