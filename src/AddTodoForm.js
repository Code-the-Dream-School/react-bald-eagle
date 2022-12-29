import React from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = React.useState('');

  function handleTitleChange(event) {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
        label="Title"
      >
        Title:
      </InputWithLabel>
      <button>Add</button>
    </form>
  );
}

export default AddTodoForm;
