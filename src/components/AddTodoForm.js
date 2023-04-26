import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import styles from '../styles/AddTodoForm.module.css';
import PropTypes from 'prop-types';


function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState('')
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };
    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo({ Title: todoTitle });
        setTodoTitle('');

    }
    return (
        <div className="Container">
            <form className={styles.TodoForm} onSubmit={handleAddTodo}>
                <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title: </InputWithLabel>
                <button className={styles.TodoButton}>Add</button>
            </form>
        </div>
    )
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;