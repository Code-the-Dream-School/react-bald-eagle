import React from 'react';
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types';

const TodoList = ({ todoList, onRemoveTodo }) => {
    return (
        todoList.map((item) => {
            return (
                <React.Fragment key={item.id}> <TodoListItem item={item} onRemoveTodo={onRemoveTodo} />
                </React.Fragment>)
        })
    );
}

TodoList.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default TodoList;
