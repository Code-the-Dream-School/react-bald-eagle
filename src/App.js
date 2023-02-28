import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoContainer from './components/TodoContainer';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [toggleAscDescSorting, setToggleAscDescSorting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={
          <Home 
            todoList={todoList} 
            setTodoList={setTodoList} 
            toggleAscDescSorting={toggleAscDescSorting} 
            setToggleAscDescSorting={setToggleAscDescSorting} 
            isLoading={isLoading} 
            setIsLoading={setIsLoading} 
          />
        } />
        <Route path='/ltg' exact element={
          <TodoContainer 
            tableName="Long Term Goals" 
            todoList={todoList} 
            setTodoList={setTodoList} 
            toggleAscDescSorting={toggleAscDescSorting} 
            setToggleAscDescSorting={setToggleAscDescSorting} 
            isLoading={isLoading} 
            setIsLoading={setIsLoading} 
          />
        } />
        <Route path='/stg' exact element={
          <TodoContainer 
            tableName="Short Term Goals" 
            todoList={todoList} 
            setTodoList={setTodoList} 
            toggleAscDescSorting={toggleAscDescSorting} 
            setToggleAscDescSorting={setToggleAscDescSorting} 
            isLoading={isLoading} 
            setIsLoading={setIsLoading} 
          />
        } />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
