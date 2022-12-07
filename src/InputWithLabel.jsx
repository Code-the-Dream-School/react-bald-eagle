import React from "react";

function InputWithLabel(props) {
    return (
        <React.Fragment>
            <label htmlFor="todoTitle">{props.children}</label>
            <input          
                type="text" 
                id="todoTitle" 
                name="title"
                value={props.todoTitle}
                onChange={props.handleTitleChange}
                // Add autoFocus prop to input element
                autoFocus
            />
        </React.Fragment>
    )
};

export default InputWithLabel;