import React from 'react';
import TodoListItem from "./TodoListItem";


const TodoList = ({ todoList }) => {
    // console.log(TodoList);
    return (
        todoList.map(item => <TodoListItem key={item.id} title={item.title} />)
    );
}

export default TodoList;
