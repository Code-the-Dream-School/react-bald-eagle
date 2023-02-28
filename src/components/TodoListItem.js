import React, { useState, Fragment } from "react";
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

var remove = '\u2717';

const TodoListItem = ({ todo, onRemoveTodo, onUpdateTodo, todoList, setTodoList }) => {
    const [isEditing, setIsEditing] = useState(false); 
    const [title, setTitle] = useState(todo.fields.Title || '');  
    const [note, setNote] = useState(todo.fields.Note || '');
    const [completed, setCompleted] = useState(todo.fields.Completed || false);

    const handleUpdate = async (id) => {
        const updatedRowData = await onUpdateTodo({
            id: todo.id,
            fields: {
                Title: title,
                Note: note,
                Completed: completed,
            }
        });
        const filteredTheUpdatedRowList = todoList.filter((todo) => todo.id !== id)
        
        const filteredAndUpdated = ([...updatedRowData.records, ...filteredTheUpdatedRowList]);

        filteredAndUpdated.sort((objectA, objectB) => {
            if (objectA.fields.Title < objectB.fields.Title) return -1;
            else if (objectA.fields.Title > objectB.fields.Title) return 1;
            else return 0;  
        });
        setTodoList(filteredAndUpdated);
        setIsEditing(false);
    }

    return (
        
        <Fragment>      
                                                            {/* HERE IS THE CHECKBOX:  */}
            <td className={style.checkBoxReady}>
                {isEditing ? (
                    <input 
                        className={style.checkBox1} 
                        id="checkbox" 
                        type="checkbox" 
                        checked={completed} 
                        onChange={() => setCompleted(!completed)}
                    />
                    ) 
                    : ( 
                        <p>{todo.fields.Completed ? '\u2714' : '\u2610'}</p>
                    )
                    } 
            </td>
                                                                    {/* HERE IS THE TITLE:  */}
            <td className={style.todoListItem}>
                {isEditing ? (
                    <input 
                        id='todoTitle'
                        type="text" 
                        name='todoTitle' 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        autoFocus
                    /> 
                ) : (
                    todo.fields.Title
                )}
            </td>
                                                                    {/* HERE IS THE NOTE:  */}
            <td className={style.todoListItem}>
                {isEditing ? (
                    <input 
                        id='todoNote'
                        type="text" 
                        name='todoNote' 
                        value={note} 
                        onChange={(e) => setNote(e.target.value)} 
                    /> 
                ) : (
                    todo.fields.Note
                )}
            </td>
                                                            {/* HERE are the 3 buttons:  */}
            <td className={style.doneEditToggle}>
                {isEditing ? (
                    <button 
                        className={style.editButton} 
                        type="button" 
                        onClick={() => handleUpdate(todo.id)}
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
            <td className={style.removeButton}>
                <button 
                    className={style.buttons} 
                    type="button" 
                    onClick={() => onRemoveTodo(todo.id)}
                >
                    {remove}
                </button>
            </td>
        </Fragment>
    );
};

TodoListItem.propTypes = {
    todo: PropTypes.object, 
    onRemoveTodo: PropTypes.func, 
    onUpdateTodo: PropTypes.func,
    todoList: PropTypes.array, 
    setTodoList: PropTypes.func, 
}
    
export default TodoListItem;