import { useState, useEffect } from 'react';

const useSemiPersistentState = () => {
    const [todoList, setTodoList] = useState(() => {
    const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList'))
      return savedTodoList || [];
    });
  
    useEffect(() => {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList));
      }, [todoList, setTodoList]);
  
    return [todoList, setTodoList]
  }

  export default useSemiPersistentState;