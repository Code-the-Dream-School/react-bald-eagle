import React, { useState } from "react";
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

var remove = '\u2718';

const TodoListItem = ({ todo, onRemoveTodo, onUpdateTodo }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
                <td><input 
                    className={style.checkBox} 
                    id="checkbox" 
                    type="checkbox" 
                    checked={todo.completed} 
                /></td>

            <td className={style.todoListItem}>
                {isEditing ? (
                    <input 
                        id='todoTitle'
                        type="text" 
                        name='todoTitle' 
                    /> 
                ) : (
                    todo.title || todo.fields.Title
                )}
            </td>
            <td className={style.todoListItem}>
                {isEditing ? (
                    <input 
                        id='todoNote'
                        type="text" 
                        name='todoNote' 
                    /> 
                ) : (
                    todo.note || todo.fields.Note
                )}
            </td>
            <td>
                {isEditing ? (
                    <button 
                        className={style.editButton} 
                        type="button" 
                    >
                        Done
                    </button>
                ) : (
                    <button 
                        className={style.editButton} 
                        type="button"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit
                    </button>
                )}
            </td>
            <td>
                <button 
                    className={style.buttons} 
                    type="button" 
                    onClick={() => onRemoveTodo(todo.id)}
                >
                    {remove}
                </button>
            </td>
        </>
    );
};

TodoListItem.propTypes = {
    todo: PropTypes.object, 
    onRemoveTodo: PropTypes.func, 
    onUpdateTodo: PropTypes.func
}
    
export default TodoListItem;