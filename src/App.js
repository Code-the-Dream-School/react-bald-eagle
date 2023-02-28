
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoContainer from './components/TodoContainer';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/ltg' exact element={<TodoContainer tableName="Long Term Goals" />} />
        <Route path='/stg' exact element={<TodoContainer tableName="Short Term Goals" />} />
        <Route path='/new' exact element={<h1>New Todo List</h1>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
