import React from 'react';
// import addTasks from './AddTodoForm';

function InputWithLabel({ todoTitle, handleTitleChange, handleAddTodo, children, label, isFocused }) {
  
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <form onSubmit={handleAddTodo}>
      
      {/* below will use label value first, but if empty, then will use children = TodoTitle   */}
      <label htmlFor="todoTitle">{label || children}</label>
      <input 
        id={todoTitle} 
        type="text" 
        name="title" 
        value={todoTitle}
        placeholder = "title"
        onChange={handleTitleChange}
        ref={inputRef}        
      />
      
      <label htmlFor="taskDueDate">Due Date</label>
      <input id="taskDueDate" placeholder = "YYYY-MM-DD"/>
      <button type="submit" onClick={handleAddTodo}>Add</button>   
      <span> </span>
     
      </form>      
    </>
  )

}


export default InputWithLabel;



