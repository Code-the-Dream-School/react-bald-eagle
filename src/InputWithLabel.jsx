import React, { useEffect, useRef } from "react";

function InputWithLabel(props) {
    // Use the useRef React hook to create an imperative ref named inputRef
    const inputRef = useRef();

    // Define a useEffect React hook with an empty dependency list 
    useEffect(() => {
        // Call the focus() method on the current inputRef
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
                // Remove the autoFocus prop on the input element
                    //autoFocus
                // Add a ref prop with value inputRef
                ref={inputRef}
            />
        </React.Fragment>
    )
};

export default InputWithLabel;