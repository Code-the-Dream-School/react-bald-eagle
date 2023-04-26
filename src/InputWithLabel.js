import { useEffect, useRef } from 'react';
import styles from './styles/inputWithLabel.module.css';

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
    const inputRef = useRef();

    useEffect(() => { inputRef.current.focus(); }, [todoTitle]);

    return (
        <>
            <label className={styles.todoLabel} htmlFor="todoTitle">{children}</label>
            <input className={styles.todoInput} ref={inputRef} type="text" id="todoTitle" name="title"
                value={todoTitle}
                onChange={handleTitleChange}
            >
            </input>
        </>
    )
}

export default InputWithLabel;
