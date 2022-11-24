import React from 'react';

function AddToDoForm ({ onAddTodo }) {
  
  const [todoTitle, setTodoTitle] = React.useState('');
  
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  const handleAddTodo = (event) => {
    event.preventDefault();
    // const todoTitle = event.target.title.value
    
    console.log(todoTitle);
    // event.target.reset();
    onAddTodo({title: todoTitle, id: Date.now()});
    setTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input 
        id="todoTitle" 
        type="text" 
        name="title" 
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button>Add</button>
    </form>  
  )
};


export default AddToDoForm;
