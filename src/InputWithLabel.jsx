import React from "react";

// Declare a new functional React component named InputWithLabel 

// Add props as a parameter in the InputWithLabel function



function InputWithLabel(props) {

    return (

        // Paste  the label and input elements that you copied
        <React.Fragment>
            <label htmlFor="todoTitle">Title</label>

            <input 
                type="text" 
                id="todoTitle" 
                name="title"
                // Update todoTitle and handleTitleChange references to come from props
                value={props.todoTitle}
                onChange={props.handleTitleChange}
            />
        </React.Fragment>
        
    )

};

//Export InputWithLabel
export default InputWithLabel;