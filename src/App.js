import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTableData = async () => {
    const response = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    });
    const data = await response.json();
    setTodoList(data.records);
    setIsLoading(false);
  }

  const deleteTableData = async (tableName, recordId) => {
    const response = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${recordId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    });
    const data = await response.json();
    return data;
  }
 
  const removeTodo = async (id) => {
    await deleteTableData('Default', id);
    const modifiedTodo = todoList.filter(
      (todo) => todo.id !== id
    );
    setTodoList(modifiedTodo);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={
          <div className='app__wrapper'>
            <img src="https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676_960_720.png" alt='list'/>
            <div className='add__form__container'>
              <AddTodoForm fetchTableData={fetchTableData} /> 
              {/* <AddTodoForm onAddTodo={addTodo} /> */}
            </div>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            )
            }
          </div>
        } />
        <Route path='/new' exact element={<h1>New Todo List</h1>} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
