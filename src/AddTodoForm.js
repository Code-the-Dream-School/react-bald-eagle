import React from 'react';
import InputWithLabel from './InputWithLabel';

function AddToDoForm ({ onAddTodo }) {
  
  const [todoTitle, setTodoTitle] = React.useState('');
  
  const handleTitleChange = (event) => {
    console.log("event", event)
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  const handleAddTodo = (event) => {
    event.preventDefault();
    // const todoTitle = event.target.title.value
    const dueDate = event.target["Due Date"];
    const todoTitle = event.target.todoTitle;
    addTasks({todoTitle, dueDate});
    
    console.log(todoTitle);
    // event.target.reset();
    onAddTodo({title: todoTitle, id: Date.now()});
    setTodoTitle('');
  }
  
  return (
    <>
      <InputWithLabel 
        todoTitle = {todoTitle} 
        handleTitleChange={handleTitleChange} 
        handleAddTodo={handleAddTodo}
        label="Task Title "
        isFocused
      >
        TodoTitle:  
      </InputWithLabel>     
    </>  
  )
};

export default AddToDoForm;
