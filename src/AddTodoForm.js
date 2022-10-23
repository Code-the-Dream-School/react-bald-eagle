import React from 'react'

const AddTodoForm = () => {
  return (
    <div>
        <form>
        <label htmlFor="todoTitle">Title</label>
        <input id="todoTitle" type="text" />
        <input type="submit" value="Add" />
        </form>
        
    </div>
  )
}

export default AddTodoForm