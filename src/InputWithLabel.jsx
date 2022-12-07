import React from "react";

function InputWithLabel(props) {
    return (
        <React.Fragment>
            {/* Replace label prop with children */}
            <label htmlFor="todoTitle">{props.children}</label>
            <input          
                type="text" 
                id="todoTitle" 
                name="title"
                value={props.todoTitle}
                onChange={props.handleTitleChange}
            />
        </React.Fragment>
    )
};

export default InputWithLabel;