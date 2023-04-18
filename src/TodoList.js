import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, onRemoveTodo }) => {
    return (
        todoList.map((item) => {
            return (
                <React.Fragment key={item.id}> <TodoListItem item={item} onRemoveTodo={onRemoveTodo} />
                </React.Fragment>)
        })
    );
}

export default TodoList;
