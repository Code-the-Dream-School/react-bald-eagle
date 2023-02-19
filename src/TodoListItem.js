import React from "react";
import Checkbox from './Checkbox';
import style from './TodoListItem.module.css';

var remove = '\u2718';

const TodoListItem = ({ todo, onRemoveTodo }) => {
    console.log('this is todo:', todo)
   
    return (
        <>
            <td><Checkbox className={style.checkbox__styled}/></td>
            <td className={style.todoListItem}>{todo.Title || todo.fields.title}</td>
            <td className={style.todoListItem}>{todo.Note || todo.fields.note}</td>
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