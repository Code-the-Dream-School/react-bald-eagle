import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {

  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    fetch(`${url}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    })
      .then(response => response.json())
      .then(result => {
        setTodoList(result.records);
        setIsLoading(false)
      })
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);
  
  const addTableData = async (newFields) => {
    const res = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                records: [
                    {
                        fields: {
                            ...newFields,
                        },
                    },
                ],
            }),
        }
    );
    const data = await res.json();
    return data;
};

  const deleteTableData = async (id) => {
    const res = await fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
    {
        method: 'DELETE',
        headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return data;
  };

  const removeTodo = async (id) => {
      await deleteTableData(id);
      const newTodoList = todoList.filter(
      (todo) => todo.id !== id
      );
      setTodoList(newTodoList);
  };
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={
          <div className='app__wrapper'>
            <img src="https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676_960_720.png" alt='list'/>
            <div className='add__form__container'>
              <AddTodoForm onAddTodo={addTableData} todoList={todoList} setTodoList={setTodoList} />
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
