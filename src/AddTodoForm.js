import React from "react";

//  Add props as a parameter in the AddTodoForm function
function AddTodoForm(props) {

    //function called 'handleAddTodo' that takes event as a parameter
    const handleAddTodo = (event) => {
        
        //preventDefault method
        event.preventDefault()

        // Save the new iputed value on 'todoTitle'
        const todoTitle = event.target.title.value;
      
        // Inside the handleAddTodo function invoke the onAddTodo
        props.onAddTodo(todoTitle)
         event.target.title.value = '';

        //log the value of todoTitle in the console
        console.log(`todoTitle: ${todoTitle}`);
        
        // * Inside the handleAddTodo function, 
        // * invoke the onAddTodo callback prop and pass todoTitle as an argument
 
        //Clears out the text from input text box
        //event.target.reset();
    }

    return(
        //Add onSubmit prop and pass the handleAddTodo function
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title: 
             <input name="title" type="text" id="todoTitle" onChange={handleAddTodo} />
            </label>
            <button type="submit">Add</button>
            <p>Hi! : <strong>{props.todoTitle}</strong></p>
        </form>
    )
}
export default AddTodoForm;
