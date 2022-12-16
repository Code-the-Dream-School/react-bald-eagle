import React, { useEffect, useRef } from 'react';

function InputWithLabel (props){

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    },[])
    return (
        <>
            <label htmlFor="todoTitle">{props.children}:</label>
            <input 
                id="todoTitle" 
                type="text" 
                name="title"
                value={props.todoTitle}
                onChange={props.handleTitleChange}
                ref = {inputRef}
                />
        </>
    );
}

export default InputWithLabel;