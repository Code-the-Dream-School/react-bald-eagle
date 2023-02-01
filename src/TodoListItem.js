import React from "react";
import Checkbox from './Checkbox';
import style from './TodoListItem.module.css';

var remove = '\u2718';

const TodoListItem = ({ todo, onRemoveTodo }) => {
   
    return (
        <>
            {/* <td>{<Checkbox className={style.checkbox__styled} /> || todo.fields.completed}</td> */}
                <td><Checkbox className={style.checkbox__styled}/></td>
            <td className={style.todoListItem}
                // contentEditable='true'
                // onInput={e => console.log('text inside div', e.currentTarget.textContent)}
            >
                {todo.title || todo.fields.title}
            </td>
            <td className={style.todoListItem}>{todo.todoNote || todo.fields.note}</td>
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