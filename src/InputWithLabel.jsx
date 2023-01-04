import React, { useEffect, useRef } from "react";

function InputWithLabel(props) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    });

    return (
        <React.Fragment>
            <label htmlFor="todoTitle">{props.children}</label>
            <input          
                type="text" 
                id="todoTitle" 
                name="title"
                value={props.todoTitle}
                onChange={props.handleTitleChange}
                ref={inputRef}
            />
        </React.Fragment>
    )
};

export default InputWithLabel;