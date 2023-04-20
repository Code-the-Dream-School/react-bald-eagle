import { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import Header from './Header';
import TodoList from './TodoList';
import './styles/App.css';
import fetchApiData from './apiUtils';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTodoList = async () => {
      try {
        const data = await fetchApiData('fetch', {}, null, process.env.REACT_APP_AIRTABLE_API_KEY_READ);
        setTodoList(data.records);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodoList();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = async (newTodo) => {
    const fields = { ...newTodo };
    try {
      const data = await fetchApiData('add', fields, null, process.env.REACT_APP_AIRTABLE_API_KEY_WRITE);
      setTodoList([...todoList, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const removeTodo = async (id) => {
    try {
      await fetchApiData('delete', null, id, process.env.REACT_APP_AIRTABLE_API_KEY_WRITE);
      setTodoList(todoList.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={
          <>
            <Header isInNewPage={false} />
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
          </>
        } />
        <Route path="/new" element={<Header isInNewPage={true} />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
