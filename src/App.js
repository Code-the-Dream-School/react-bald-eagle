import { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import Header from './Header';
import TodoList from './TodoList';
import './styles/App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTodoList = async () => {
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            data: {
              todoList: JSON.parse(localStorage.getItem('savedTodoList')) || [],
            },
          });
        }, 2000);
      });
      setTodoList(result.data.todoList);
      setIsLoading(false);
    };
    fetchTodoList();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((el) => el.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <Header />
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> :
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      }
    </div>
  );
}

export default App;
