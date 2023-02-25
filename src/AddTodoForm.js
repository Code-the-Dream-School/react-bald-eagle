import React from 'react';
import InputWithLabel from './InputWithLabel';


export const addTasks = async ({ dueDate, todoTitle }) => {
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
            "Due Date": dueDate,
            title: todoTitle,
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
    const dueDate = event.target["Due Date"];
    const todoTitle = event.target.title;
    console.log(`dueDate: `, dueDate,  `todotitle:`, todoTitle)
    addTasks({todoTitle, dueDate});
    
    console.log(todoTitle);
    // event.target.reset();
    // onAddTodo({title: todoTitle, id: Date.now()});
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
      <button type="submit" onClick={handleAddTodo}>Add</button>     
    </>  
  )
};

export default AddToDoForm;
