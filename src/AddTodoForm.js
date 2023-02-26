import React from 'react';
import InputWithLabel from './InputWithLabel';


export const addTasks = async ({ todoTitle,formData }) => {
  const res = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            ...formData,
          },  
        },
      ],
    }),         
  });
const result2 = await res.json();    
console.log("result2", result2);
}; 

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
    // const taskDueDate = event.target["Due Date"].value;
    const todoTitle = event.target.title.value;
    console.log(`todoTitle:`, todoTitle)
    addTasks({todoTitle});
    
    console.log(todoTitle);
    // event.target.reset();
    // onAddTodo({title: todoTitle, id: Date.now()});
    // onAddTodo({ title: todoTitle });
    // setTodoTitle('');
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
