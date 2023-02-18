import React from "react";
import Checkbox from './Checkbox';
import style from './TodoListItem.module.css';

var remove = '\u2718';

const TodoListItem = ({ todo, onRemoveTodo }) => {
   
    return (
        <>
            <td><Checkbox className={style.checkbox__styled}/></td>
            <td className={style.todoListItem}>{todo.title || todo.fields.Title}</td>
            <td className={style.todoListItem}>{todo.note || todo.fields.Note}</td>
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
    
export default TodoListItem;