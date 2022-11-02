import react from "react";

//
function AddTodoForm() {

    return(
        //
        <form>
            <label htmlFor="todoTitle">Title: 
             <input type="text" id="todoTitle" /><br />
            </label><br />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm;