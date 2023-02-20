import React from "react";
import Checkbox from './Checkbox';
import style from './TodoListItem.module.css';

var remove = '\u2718';

const TodoListItem = ({ todo, todoList, setTodoList, onRemoveTodo }) => {
    console.log('this is todo:', todo)
   
    return (
        <>
            <td><Checkbox className={style.checkbox__styled}/></td>
            <td className={style.todoListItem}>{todo.fields.Title}</td>
            <td className={style.todoListItem}>{todo.fields.Note}</td>
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